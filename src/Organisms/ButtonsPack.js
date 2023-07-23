/* eslint-disable no-unused-vars */
import { Button, Flex } from "@chakra-ui/react"
import React, {useState} from "react"
import "./ButtonsPack.css"
import { classroomService } from "../Service/ClassroomService"
import PropTypes from 'prop-types'
import { useEffect } from "react"

export const ButtonsPack = (props) => {

    const [flag, setFlag] = useState(false)
    const [open, setOpen] = useState(false)

    const [classroom, setClassroom] = useState({})
   
    const getClassroom = async () => {
        const auxClassroom = await classroomService.getClassroomInfo(props.classroomId)
        setClassroom(auxClassroom)
    }

    const handleUpdateHabilitation = async () => {
        await classroomService.updateHabilitation(classroom.idAula, !classroom.habilitada)
        getClassroom()
    }

    const handleModal = () => {
        setOpen(true)
    }

    useEffect(() => {
        getClassroom()
    }, [])

    return (
        <Flex className="buttonContainer">
            <Button className="button" onClick={props.handleActionButton}>Crear Asignacion</Button>
            <Button className="button" onClick={handleUpdateHabilitation}>{classroom.habilitada? "Clausurar Aula" : "Habilitar Aula"}</Button>
        </Flex>
    )
}

ButtonsPack.propTypes = {
    classroomId: PropTypes.number,
    handleActionButton: PropTypes.func.isRequired,
}