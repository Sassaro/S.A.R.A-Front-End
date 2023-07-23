/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import * as olSource from "ol/source"
import Map from './Map'
import Layers from '../Layers/Layers'
import TileLayer from '../Layers/TileLayer'
import { boundingExtent } from "ol/extent"
import { fromLonLat, get, transformExtent } from "ol/proj"
import VectorLayer from '../Layers/VectorLayer'
import VectorSource from 'ol/source/Vector'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import Icon from 'ol/style/Icon'
import { useLocation, useNavigate } from 'react-router-dom'
import { MapInteractivity } from '../Molecules/MapInteractivity'
import { buildingService } from '../Service/BuildingService'
import { DeleteRouteButton } from '../Molecules/DeleteRouteButton'
import { Style,Stroke } from "ol/style"
import { geolocationManager } from '../Domain/GeolocationManager'
import { useToast } from '@chakra-ui/react'
import { CreateRouteManager } from '../Domain/CreateRouteManager'
import { SubjectSearchAlt } from './SubjectSearchAlt'
import { RouteStateContext } from '../Contexts/RouteStateContext'
import { DropdownAlt } from './DropdownAlt'
import "./UnsamMap.css"

export const UnsamMap = () => {

  const { createdRoute,creatingRoute,setCreatingRoute,setCreatedRoute,showErrorFunction } = useContext(RouteStateContext)
  const [center, setCenter] = useState([0,0])
  const toast = useToast()
  const [zoom, setZoom] = useState(9)
  const [vectorSource, setVectorSource] = useState(new VectorSource())
  const [buildings,setBuildings] = useState([])
  const location = useLocation()

  const limiteSuperior = [-58.5334722,-34.5754979]
  const limiteInferior = [-58.508110,-34.584700]
  const routeStyle = new Style({
    stroke: new Stroke({
      width: 5,
      color: [3, 152, 252, 1]
    })
  })

  const navigate = useNavigate()

  var ext = boundingExtent([limiteSuperior,limiteInferior])
  ext =  transformExtent(ext, get('EPSG:4326'), get('EPSG:3857'))

  useEffect(() => {
    getBuildings()
    
    initGeolocation()
  },[])

  //inicializa la geolocalizacion
  const initGeolocation = () => {

    geolocationManager.startGeolocation()

    //Listener de error al obtener la geolocalizacion
    geolocationManager.geolocationObject.on('error', function (error) {
        
        if(error.code === 1){
            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'error',
                isClosable: true,
                description: "Error: Se desactivo la geolocalizacion, por favor intentar de nuevo con el modo manual"
            })
            CreateRouteManager.getInstance().deactivatedGeolocation = true
            clearInterval(CreateRouteManager.getInstance().routeIntervalId)
        }
    })
  }

  const getBuildings = async () => {
      const aux = await buildingService.getAllBuildings()
      setBuildings(aux)
      loadFeatures(aux)
  }

  const changeFinishedRoute = (value) => {
    setFinishedRoute(value)
  }

  const convertToPoint = (building) => {

    let loggedUser = null

    if(location.state){
      loggedUser = location.state
    }

    return {
      id: building.id,
      coords: fromLonLat([building.coordenadasX,building.coordenadasY]),
      nombre: building.nombre,
      content: "Edificio: " + building.nombre,
      navigate: function(){navigate("/building/"+ building.id,{state: loggedUser})},
      imagen: building.imagen
    }
  }

  const loadFeatures = (buildings) =>{

    var markerStyle = new Style({
      image: new Icon({
        src: require('../Images/Marker.png'),
        color: 'transparent',
        crossOrigin: 'anonymous',
        scale: 0.2
      })
    })

    buildings.forEach( building =>{

      const point = convertToPoint(building)
      var feature = new Feature({
        id: point.id,
        geometry: new Point(point.coords),
        name: point.nombre,
        clickable: true,
        content: point.content,
        navigate: point.navigate,
        imagen: point.imagen
      })

      feature.setStyle(markerStyle)

      vectorSource.addFeature(feature)
      })
  }

//########################################################################

return (
  <>
      <div className='mapContainer'>
      <Map center={center} zoom={zoom} extent={ext}>
          <MapInteractivity creatingRoute = {creatingRoute} changeCreatedRouteFlag={(value) => { setCreatedRoute(value) }} changeCreatingRouteFlag={ (value) => { setCreatingRoute(value) } } />
          <Layers>
              <TileLayer source={new olSource.OSM()}></TileLayer>
              <VectorLayer source={vectorSource} style={routeStyle}></VectorLayer>
          </Layers>

          <SubjectSearchAlt
          creatingRoute = {creatingRoute} 
          changeCreatedRouteFlag={(value) => { setCreatedRoute(value) }} 
          changeCreatingRouteFlag={ (value) => { setCreatingRoute(value) } }/>

          <DeleteRouteButton createdRoute={createdRoute} creatingRoute={creatingRoute} changeCreatedRouteFlag = { () => { setCreatedRoute(false) } }/>

          <DropdownAlt/>

      </Map>
    </div>
  </>

)}

export default UnsamMap