/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-useless-return */
import React from 'react'
import { Flex,Button, Spinner, Box,Text } from "@chakra-ui/react"
import MapContext from '../Utils/MapContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import "./DeleteRouteButton.css"
import { CreateRouteManager } from '../Domain/CreateRouteManager'

export const DeleteRouteButton = (props) => {

    const deleteRouteClickFunc = () => {
        
        CreateRouteManager.getInstance().deleteRoute()
        props.changeCreatedRouteFlag()
        CreateRouteManager.getInstance().deletedRouteFlag = true
    }

    return(
        <>
            { (props.creatingRoute || props.createdRoute) && 
                <div id='deleteRoute' className='deleteRouteButton'>

                    { (props.creatingRoute) && 
                        <Flex flexDirection={"row"}>
                            <Text> Generando Ruta </Text>
                            <Spinner></Spinner>
                        </Flex> 
                    }
                    { (props.createdRoute) && <Button colorScheme='teal' onClick={deleteRouteClickFunc}>Borrar Ruta</Button> }

                </div>
            }
        </>
    )

}

DeleteRouteButton.propTypes = {
    createdRoute: PropTypes.bool,
    creatingRoute: PropTypes.bool,
    changeCreatedRouteFlag: PropTypes.func
}