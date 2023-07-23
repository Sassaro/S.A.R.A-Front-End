/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import { fromLonLat } from "ol/proj"
import * as ol from "ol"
import polyline from 'polyline-encoded'
import { routeService } from "../Service/RouteService"
import { LineString, Point } from "ol/geom"
import { geolocationManager } from "./GeolocationManager"
import { Style,Circle, Fill, Stroke } from "ol/style"
import { epsg3857toEpsg4326 } from "./Utils"

const clickFunction = (event) => {

    const createRouteManager = CreateRouteManager.getInstance()

    //si el usuario no puede generar la ruta por geolocalizacion, se hace haciendo click en la pantalla.
    if(createRouteManager.clickMode){
        createRouteManager.generateRouteManually(epsg3857toEpsg4326(event.coordinate))
    }
}

export class CreateRouteManager {

    mapObject
    createRouteManagerObject
    routeIntervalId
    destinationCoordinates
    clickMode = false
    deactivatedGeolocation = false

    deletedRouteFlag = false


    showErrorFunction
    changeCreatingFlagFunc
    changeCreatedFlagFunc
    

    static create(_mapObject,_showErrorFunction,_changeCreatedFlagFunc,_changeCreatingFlagFunction){

        var createRouteManagerObjectAux = new CreateRouteManager()

        createRouteManagerObjectAux.mapObject = _mapObject
        createRouteManagerObjectAux.showErrorFunction = _showErrorFunction
        createRouteManagerObjectAux.changeCreatedFlagFunc = _changeCreatedFlagFunc
        createRouteManagerObjectAux.changeCreatingFlagFunc = _changeCreatingFlagFunction

        this.createRouteManagerObject = createRouteManagerObjectAux

        _mapObject.on("click", clickFunction)

        return this.createRouteManagerObject
    }

    static getInstance() {

        return this.createRouteManagerObject
        
    }

    async generateRoute(positionStart, positionEnd){

        //this.generateRouteFOSSGIS(positionStart,positionEnd)
        this.generateRouteORS(positionStart,positionEnd)
    }

    async generateRouteORS(positionStart,positionEnd){

        const routeCoordinates = await routeService.getRouteORS(positionStart,positionEnd)

        var routePoints = []

        for (var i = 0; i < routeCoordinates.length; i++) {
          var coord = fromLonLat(routeCoordinates[i])
          routePoints.push(coord)
        }

        const routeFeature = new ol.Feature({
            geometry: new LineString(routePoints),
            name: "route",
        })

        this.deleteRoute()
        this.getVectorLayer().addFeature(routeFeature)

        var routeExtent = routeFeature.getGeometry().getExtent()
        this.mapObject.getView().fit(routeExtent, {padding: [50, 50, 50, 50]})

        const positionFeature = new ol.Feature({
            name: "PositionDot",
            geometry: new Point(fromLonLat(positionStart))
        })
        positionFeature.setStyle(
        new Style({
            image: new Circle({
                radius: 6,
                fill: new Fill({
                    color: '#3399CC',
                }),
                stroke: new Stroke({
                    color: '#fff',
                    width: 2,
                }),
            }),
        }))

        this.getVectorLayer().addFeature(positionFeature)

    }

    async generateRouteFOSSGIS(positionStart,positionEnd){

        const route = await routeService.getRouteFOSSGIS(positionStart,positionEnd)
        const coordinates = []
        route.forEach((it) => {
            coordinates.push(polyline.decode(it.geometry).map(coords => [coords[1], coords[0]]))
        }) 
        
        var routePoints = []
        for (var i = 0; i < coordinates.flat().length; i++) {
        var coord = fromLonLat(coordinates.flat()[i])
        routePoints.push(coord)
        }

        const routeFeature = new ol.Feature({
            geometry: new LineString(routePoints),
            name: "route",
        })

        this.deleteRoute()
        this.getVectorLayer().addFeature(routeFeature)

        var routeExtent = routeFeature.getGeometry().getExtent()
        this.mapObject.getView().fit(routeExtent, {padding: [50, 50, 50, 50]})

        const positionFeature = new ol.Feature({
            name: "PositionDot",
            geometry: new Point(fromLonLat(positionStart))
        })
        positionFeature.setStyle(
        new Style({
            image: new Circle({
                radius: 6,
                fill: new Fill({
                    color: '#3399CC',
                }),
                stroke: new Stroke({
                    color: '#fff',
                    width: 2,
                }),
            }),
        }))

        this.getVectorLayer().addFeature(positionFeature)
    }

    async generateRouteManually(positionStart){

        console.log("Generating Route Manually")

        this.changeCreatingFlagFunc(true)
        await this.generateRoute(positionStart,this.destinationCoordinates)
        this.changeCreatingFlagFunc(false)
        this.changeCreatedFlagFunc(true)
        this.clickMode = false

    }

    async generateRouteOnGeolocation(){

        const accuracy = geolocationManager.geolocationObject.getAccuracy()

        if((accuracy > 100  && !this.deactivatedGeolocation) || !accuracy){

            console.log("geolocation mode deactivated")
            this.deactivatedGeolocation = true
            clearInterval(this.routeIntervalId)

            this.showErrorFunction("Error: La precisión de la geolocalización es muy baja, por favor use el modo manual")
            this.changeCreatingFlagFunc(false)
        }else{
            if(!this.deletedRouteFlag){

                console.log("generating route with geolocation")

                this.changeCreatedFlagFunc(false)
                this.changeCreatingFlagFunc(true)
                await this.generateRoute(await geolocationManager.getPosition(),this.destinationCoordinates)
                this.changeCreatingFlagFunc(false)
                this.changeCreatedFlagFunc(true)
            }
        }
    }

    async startRouteGenerationWithGeolocation(){

        //si hay una ruta creada, la borra
        this.deleteRoute()
        this.changeCreatedFlagFunc(false)

        //cancela el intervalo si existe.
        clearInterval(this.routeIntervalId)

        this.deletedRouteFlag = false

        this.changeCreatingFlagFunc(true)
        setTimeout( () =>{
            this.generateRouteOnGeolocation()
        },2000)

        this.routeIntervalId = setInterval( () => {this.generateRouteOnGeolocation()} ,15000)

    }

    deleteRoute(){

        const vectorLayer = this.getVectorLayer()

        const feature = vectorLayer.getFeatures().filter( (it) => { return it.get("name") == "route" || it.get("name") == "PositionDot" } )

        if(feature.length > 0){
            feature.forEach( (it) => { vectorLayer.removeFeature(it) } )
        }
    }

    existsRoute(){
        return this.getVectorLayer().getFeatures().filter( (it) => { return it.get("name") == "route" } ).length > 0
    }

    getVectorLayer(){
        return this.mapObject.getAllLayers()[1].getSource()
    }

}
