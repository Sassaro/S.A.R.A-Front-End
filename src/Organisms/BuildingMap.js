/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import "./BuildingMap.css"
import { SVGMaps } from '../Utils/SVGMapsStruct'
import { useEffect } from 'react'

export const BuildingMap = (props) => {
    
    const Maps = SVGMaps[props.SVGName]

    return(
        <>
            <Maps setCardFunc={props.setCardFunc} showCardFunc={props.showCardFunc} floorNumber={props.floorNumber} increaseFunc={props.increaseFunc} decreaseFunc={props.decreaseFunc}></Maps>
        </>

    )
}

BuildingMap.propTypes = {
    showCardFunc: PropTypes.func,
    floorNumber: PropTypes.number,
    increaseFunc: PropTypes.func,
    decreaseFunc: PropTypes.func,
    SVGName: PropTypes.string.isRequired,
    setCardFunc: PropTypes.func,
}

export default BuildingMap