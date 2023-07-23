/* eslint-disable no-unused-vars */
import { Flex,Text,Button } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./FloorSelector.css"
import CustomButton from '../Atoms/CustomButton'

export const FloorSelector = (props) => {

    const floorText = () => {

        switch(props.floorNumber){

            case -1:
                return "Sub Suelo"
                
            case 0:
                return "Planta Baja"

            case 1:
                return "Primer Piso"

            default:
                return ""
        }

    }

    return(
        <Flex className="floorSelector">
            <Button colorScheme='blue' isDisabled={props.floorNumber >= props.maxValue} onClick={props.increaseFunc}>+</Button>
            <b>{floorText()}</b>
            <Button colorScheme='blue' isDisabled={props.floorNumber <= props.minValue} onClick={props.decreaseFunc}>-</Button>
        </Flex>
    )

}

FloorSelector.propTypes ={
    floorNumber: PropTypes.number,
    increaseFunc: PropTypes.func,
    decreaseFunc: PropTypes.func,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
}