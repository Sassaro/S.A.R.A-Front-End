/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react"
import MapContext from "../Utils/MapContext"
import * as ol from "ol"
import PropTypes from 'prop-types'
import "./Map.css"
import { CreateRouteManager } from "../Domain/CreateRouteManager"
import { Provider, RouteStateContext } from "../Contexts/RouteStateContext"
import { useContext } from "react"


const Map = ({ children, zoom, center, extent }) => {

    const mapRef = useRef()
    const {setCreatingRoute,setCreatedRoute,showErrorFunction } = useContext(RouteStateContext)
    const [map, setMap] = useState(null)

    useEffect(() => {
        let options = {
            view: new ol.View({ 
                center: center,
                zoom: zoom,
                extent: extent
             }),
            layers: [],
            controls: [],
            overlays: []
        }
        let mapObject = new ol.Map(options)
        mapObject.setTarget(mapRef.current)
        setMap(mapObject)
        CreateRouteManager.create(mapObject,showErrorFunction,setCreatedRoute,setCreatingRoute)

        return () => mapObject.setTarget(undefined)
    }, [])

    // zoom change handler
    useEffect(() => {
        if (!map) return
        map.getView().setZoom(zoom)
    }, [zoom])

    // center change handler
    useEffect(() => {
        if (!map) return
        map.getView().setCenter(center)
    }, [center])

    return (
        <MapContext.Provider value={{ map }}>
                <div ref={mapRef} className="ol-map">
                {children}
                </div>
        </MapContext.Provider>
    )
}

Map.propTypes = {
    children: PropTypes.any,
    zoom: PropTypes.any,
    center:PropTypes.any,
    extent: PropTypes.any
}

export default Map
