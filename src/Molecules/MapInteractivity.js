/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-extra-parens */
/* eslint-disable no-caller*/
import { useContext, useEffect, useRef, useState } from "react"
import { Button, Flex,Box, useToast, Divider } from "@chakra-ui/react"
import MapContext from "../Utils/MapContext"
import PropTypes from 'prop-types'
import * as ol from "ol"
import { epsg3857toEpsg4326 } from "../Domain/Utils"
import "./MapInteractivity.css"
import { GenerateRouteButton } from "../Atoms/GenerateRouteButton"

export const MapInteractivity = (props) =>{

    const { map } = useContext(MapContext)
    const [popUpContent, setpopUpContent] = useState("")
    const [popUpNavigate, setpopUpNavigate] = useState(() => {})
    const [popUpCoordinates, setPopUpCoordinates] = useState([])
    const [bgImage, setBgImage] = useState("")
    const popupRef = useRef(null)
    let popup

    useEffect(()=> {
        if(!map) return

        popup = new ol.Overlay({
            element: popupRef.current,
            autoPan: true,
            autoPanAnimation: {
                duration: 250,
            },
            offset: [3, 0],
            })

        map.addOverlay(popup)

        map.on("click", clickFunction)
        
    },[map])

    const clickFunction = (event) => {

        var feature = map.getFeaturesAtPixel(event.pixel)
        if(feature.length > 0 && feature[0].get("clickable")) {
            const coordinates = feature[0].getGeometry().getCoordinates()
            popup.setPosition(coordinates)
            popupRef.current.style.display = 'block'

            //obtiene el contenido del popUp
            setpopUpContent(feature[0].get("content"))
            //obtiene la funcion de navegacion
            setpopUpNavigate(() => feature[0].get("navigate"))
            //obtiene las coordenas seteadas al edificio
            setPopUpCoordinates(coordinates)
            //obtiene la imagen seteada al edificio
            setBgImage(feature[0].get("imagen"))

        }else{
            popupRef.current.style.display = 'none'
        }
    }

    return(
        <Box bgImage={bgImage} ref={popupRef} className="ol-popup">
            <button className="ol-popup-closer" onClick={() => (popupRef.current.style.display = 'none')}></button>
            <div className="ol-popup-content">{popUpContent}</div>
            <Flex className="ol-popUp-button-container">
                <Button colorScheme="blue" opacity={0.9} onClick={popUpNavigate}>Ver mas informacion</Button>
                <GenerateRouteButton creatingRoute={ props.creatingRoute } changeCreatedRouteFlag={props.changeCreatedRouteFlag} changeCreatingRouteFlag={props.changeCreatingRouteFlag} position={epsg3857toEpsg4326(popUpCoordinates)}></GenerateRouteButton>
            </Flex>
        </Box>
    )
}

MapInteractivity.propTypes = {
    creatingRoute: PropTypes.bool,
    changeCreatedRouteFlag: PropTypes.func,
    changeCreatingRouteFlag: PropTypes.func,
}