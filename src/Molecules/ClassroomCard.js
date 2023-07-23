/* eslint-disable no-unused-vars */
import { Flex,Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'
import "./ClassroomCard.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ClassroomCard = (props) => {

    const navigate = useNavigate()

    const navigateToClassroom = () =>{

        if(location.state){
            navigate("/classroom/" + props.infoObject.idAula, {state: location.state})
        }else{
            navigate("/classroom/" + props.infoObject.idAula)
        }
    }


    return(
        <Flex className='cardAula' onClick={navigateToClassroom}>
            <Text className='tituloCard'><b>Aula:</b> {props.infoObject.nombreAula}</Text>
            <Text className='contenidoCard'><b>Actualmente Cursado:</b> {props.infoObject.materia}</Text>
            <Text className='contenidoCard'><b>Profesor:</b> {props.infoObject.nombreProfesor.map((prof) => {return prof + " "} )}</Text>
            <Flex className='containerHoras'>
                <Text className='contenidoCard'><b>Desde:</b> {props.infoObject.horaInicio}</Text>
                <Text className='contenidoCard'><b>Hasta:</b> {props.infoObject.horaFin}</Text>
            </Flex>
        </Flex>
    )
}

export default ClassroomCard


ClassroomCard.propTypes = {
    infoObject: PropTypes.object
}