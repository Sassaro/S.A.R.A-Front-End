/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { createContext, useEffect, useState } from 'react'
import { Button, Text } from '@chakra-ui/react'
import * as olSource from "ol/source"
import Map from '../Organisms/Map'
import Layers from '../Layers/Layers'
import TileLayer from '../Layers/TileLayer'
import Controls from '../Controls/Controls'
import FullScreenControl from '../Controls/FullScreenControl'
import { boundingExtent } from "ol/extent"
import { fromLonLat, get, transformExtent } from "ol/proj"
import { routeService } from '../Service/RouteService'
import VectorLayer from '../Layers/VectorLayer'
import VectorSource from 'ol/source/Vector'
import { Feature } from 'ol'
import { LineString } from 'ol/geom'
import "./Workbench.css"

export const WorkBench = () => {

    const [center, setCenter] = useState([0,0])
    const [zoom, setZoom] = useState(9)
    const [vectorSource, setVectorSource] = useState(new VectorSource())

    const limiteSuperior = [-58.5300722,-34.5764979]
    const limiteInferior = [-58.514110,-34.583700]

    var ext = boundingExtent([limiteSuperior,limiteInferior])
    ext =  transformExtent(ext, get('EPSG:4326'), get('EPSG:3857'))

    useEffect(() => {
    },[])

    const generateRoute = async () => {
        const routeCoordinates = await routeService.getRoute()

        var routePoints = []
        for (var i = 0; i < routeCoordinates.length; i++) {
          var coord = fromLonLat(routeCoordinates[i])
          routePoints.push(coord)
        }
        var routeFeature = new Feature({
          geometry: new LineString(routePoints)
        })
        vectorSource.addFeature(routeFeature)
    }

return (
    <div className='mapContainer'>
    <Map center={center} zoom={zoom} extent={ext}>
        <Layers>
            <TileLayer source={new olSource.OSM()}></TileLayer>
            <VectorLayer source={vectorSource}></VectorLayer>
        </Layers>
        <Controls>
          <FullScreenControl/>
          <Button onClick={generateRoute}>Generar Ruta</Button>
        </Controls>
    </Map>
    </div>
)}