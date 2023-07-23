/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import "./ClassroomSubject.css"

export const ClassroomSubject = (props) => {

    return (
        <Flex className='subjectCard'>
            <Text className='infoSection'> <b>Materia:</b> {props.materia} </Text>
            <Text className='infoSection'> <b>Profesor:</b> {props.profesores.map( (prof) => {
                return <span key={prof}> {prof + " "} </span>
            } )} </Text>
            <Text className='infoSection'> <b>Horario:</b> {props.inicio} Hs - {props.fin} Hs </Text>
        </Flex>
    )

}

export default ClassroomSubject

ClassroomSubject.propTypes = {
    materia: PropTypes.string,
    profesores: PropTypes.array,
    inicio: PropTypes.string,
    fin: PropTypes.string,
}