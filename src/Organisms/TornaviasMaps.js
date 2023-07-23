/* eslint-disable no-unused-vars */
import { Tornavias1P } from '../SVG/Tornavias1P'
import { TornaviasSubSuelo } from '../SVG/TornaviasSubSuelo'
import { TornaviasPB } from '../SVG/TornaviasPB'
import { FloorSelector } from '../Molecules/FloorSelector'
import PropTypes from 'prop-types'


export const TornaviasMaps = (props) => {

    return (
        <>
            <FloorSelector maxValue={1} minValue={-1} floorNumber={props.floorNumber} increaseFunc={props.increaseFunc} decreaseFunc={props.decreaseFunc}></FloorSelector>
            {(props.floorNumber == 0) && <TornaviasPB floorNumber={props.floorNumber}setCardFunc={props.setCardFunc} showCardFunc={props.showCardFunc}></TornaviasPB>}
            {(props.floorNumber == 1) && <Tornavias1P floorNumber={props.floorNumber} setCardFunc={props.setCardFunc} showCardFunc={props.showCardFunc}></Tornavias1P>}
            {(props.floorNumber == -1) && <TornaviasSubSuelo floorNumber={props.floorNumber} setCardFunc={props.setCardFunc} showCardFunc={props.showCardFunc}></TornaviasSubSuelo>}
        </>
    )
}

TornaviasMaps.propTypes ={
    floorNumber: PropTypes.number,
    increaseFunc: PropTypes.func,
    decreaseFunc: PropTypes.func,
    showCardFunc: PropTypes.func,
    setCardFunc: PropTypes.func
}