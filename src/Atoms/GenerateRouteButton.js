/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Button, useToast } from '@chakra-ui/react'
import { useContext } from "react"
import MapContext from "../Utils/MapContext"
import { useEffect } from "react"
import { epsg3857toEpsg4326, getErrorMessage } from "../Domain/Utils"
import "./GenerateRouteButton.css"
import { CreateRouteManager } from "../Domain/CreateRouteManager"
import { geolocationManager } from '../Domain/GeolocationManager'

export const GenerateRouteButton = (props) => {

    const { map } = useContext(MapContext)
    const toast = useToast()
    
    useEffect(()=> {
        // if(!map) return

        // map.on("click", clickFunction)
    },[map])

    // const clickFunction = (event) => {

    //     const createRouteManager = CreateRouteManager.getInstance()

    //     //si el usuario no puede generar la ruta por geolocalizacion, se hace haciendo click en la pantalla.
    //     if(createRouteManager.clickMode){
    //         createRouteManager.generateRouteManually(epsg3857toEpsg4326(event.coordinate),props.changeCreatingRouteFlag, props.changeCreatedRouteFlag)
    //     }
    // }

    const showErrorFunction = (err) => {

        toast({
            position: 'bottom-left',
            duration: 5000,
            status: 'error',
            isClosable: true,
            description: err
        })

    }

    const startRouteCreation = async () => {

        CreateRouteManager.getInstance().destinationCoordinates = props.position

        if( CreateRouteManager.getInstance().deactivatedGeolocation ){

            CreateRouteManager.getInstance().clickMode = true
            toast({
                position: 'bottom-left',
                duration: 5000,
                isClosable: true,
                description: "Haga click en la posición de inicio"
            })
            props.closeCardsFunc()
        }else{

            try{
                await CreateRouteManager.getInstance().startRouteGenerationWithGeolocation(props.changeCreatingRouteFlag, props.changeCreatedRouteFlag,showErrorFunction)
            }catch(err){
    
                toast({
                    position: 'bottom-left',
                    duration: 5000,
                    status: 'error',
                    isClosable: true,
                    description: getErrorMessage(err)
                })
            }
        }
    }

    return (
        <Button isDisabled={props.creatingRoute} colorScheme="blue" opacity={0.9} onClick={startRouteCreation}>Generar ruta</Button>
    )
}

GenerateRouteButton.propTypes = {
    creatingRoute: PropTypes.bool,
    changeCreatedRouteFlag: PropTypes.func,
    changeCreatingRouteFlag: PropTypes.func,
    position: PropTypes.array,
    closeCardsFunc: PropTypes.func,
}