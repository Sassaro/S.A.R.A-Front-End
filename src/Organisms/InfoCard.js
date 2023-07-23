/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Button, Flex,Text } from '@chakra-ui/react'
import ClassroomCard from '../Molecules/ClassroomCard'
import { ClassroomSubject } from '../Molecules/ClassroomSubject'
import "./InfoCard.css"
import { useLocation, useNavigate } from 'react-router-dom'

export const InfoCard = (props) => {
    
    const navigate = useNavigate()
    const location = useLocation()

    const goToClassroomPage = () => {

        if(location.state){
            navigate("/classroom/" + props.content.idAula,{state: location.state})
        }else{
            navigate("/classroom/" + props.content.idAula)
        }

    }


    if(!props.content.habilitada){

        return(
            <Flex className={props.isOn ? 'infoCard active' : 'infoCard'}>
                    
            <Flex className='close-button-wrapper'>
                <Button className='close-button' onClick={props.closeCardFunc}><FaChevronRight/></Button>
                <Text className='infoCardTitle'>{props.content.nombreAula}</Text>
            </Flex>

            <Flex className='classroomInfoContainer'>
                <Text>El Aula esta clausurada actualmente</Text>
            </Flex>

            <Button colorScheme='blue' onClick={goToClassroomPage}>Ver Informacion</Button>
        </Flex>
        )

        
    }else{

        if(props.content.materia == "" ){
            return (
                <Flex className={props.isOn ? 'infoCard active' : 'infoCard'}>
                    
                    <Flex className='close-button-wrapper'>
                        <Button className='close-button' onClick={props.closeCardFunc}><FaChevronRight/></Button>
                        <Text className='infoCardTitle'>{props.content.nombreAula}</Text>
                    </Flex>
    
                    <Flex className='classroomInfoContainer'>
                        <Text>El Aula esta vacia</Text>
                    </Flex>
    
                    <Button colorScheme='blue' onClick={goToClassroomPage}>Ver Informacion</Button>
                </Flex>
            )
        }else{
            return (
                
                <Flex className={props.isOn ? 'infoCard active' : 'infoCard'}>
                    
                    <Flex className='close-button-wrapper'>
                        <Button className='close-button' onClick={props.closeCardFunc}><FaChevronRight/></Button>
                        <Text className='infoCardTitle'>{props.content.nombreAula}</Text>
                    </Flex>
    
                    <Flex className='classroomInfoContainer'>
                        { (props.content.nombreProfesor) &&
                        <ClassroomSubject materia={props.content.materia} profesores={props.content.nombreProfesor} inicio={props.content.horaInicio} fin={props.content.horaFin}></ClassroomSubject> }
                        
                    </Flex>
    
                    <Button colorScheme='blue' onClick={goToClassroomPage}>Ver Informacion</Button>
                </Flex>
            )
        }

    }

}

InfoCard.propTypes = {
    isOn: PropTypes.bool,
    closeCardFunc: PropTypes.func,
    content: PropTypes.any
}
