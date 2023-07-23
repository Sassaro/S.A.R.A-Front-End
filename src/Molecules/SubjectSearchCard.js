/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Flex, Input,Text } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./SubjectSearchCard.css"
import { convertFloor } from '../Domain/Utils'
import { GenerateRouteButton } from '../Atoms/GenerateRouteButton'



export const SubjectSearchCard = (props) => {

    const navigate = useNavigate()
    const location = useLocation()

    const navigateToClassroom = () =>{

        if(location.state){
            navigate("/classroom/" + props.subjectDTO.idAula, {state: location.state})
        }else{
            navigate("/classroom/" + props.subjectDTO.idAula)
        }
    }

    return(
        <Flex className='subjectSearchCard'>
            <Text> <b>Edificio:</b> {props.subjectDTO.nombreEdificio}-{convertFloor(props.subjectDTO.piso)} </Text>
            <Text> <b>Aula:</b> {props.subjectDTO.nombreAula} </Text>
            <Flex justifyContent={'space-between'}>
                <Text> <b>Desde:</b> {props.subjectDTO.horaDesde} </Text>
                <Text> <b>Hasta:</b> {props.subjectDTO.horaHasta} </Text>
            </Flex>
            <Flex className='subject-search-card-button-container'>
                <Button className='subject-search-card-button' colorScheme='blue' onClick={navigateToClassroom}> Ir al aula </Button>
                <GenerateRouteButton closeCardsFunc={props.closeCardsFunc} creatingRoute = {props.creatingRoute} changeCreatedRouteFlag={props.changeCreatedRouteFlag} changeCreatingRouteFlag={props.changeCreatingRouteFlag} position={[props.subjectDTO.posicionEdificioX,props.subjectDTO.posicionEdificioY]}></GenerateRouteButton>
            </Flex>

        </Flex>
    )

}

SubjectSearchCard.propTypes = {
    creatingRoute: PropTypes.bool,
    changeCreatedRouteFlag: PropTypes.func,
    changeCreatingRouteFlag: PropTypes.func,
    subjectDTO: PropTypes.object.isRequired,
    closeCardsFunc: PropTypes.func,
}
