/* eslint-disable no-unused-vars */
//Crea un modal hecho en react usando chakra ui
import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,  
  Select,
  FormControl,
  FormLabel,
  Text,
  useToast,
  Flex
} from "@chakra-ui/react"
import SubjectForm from '../Organisms/SubjectForm'
import PropTypes from 'prop-types'
import { useEffect } from "react"
import { materiaService } from "../Service/MateriaService"
import { classroomService } from '../Service/ClassroomService'
import { Assignment } from "../Domain/Assignment"
import { useLocation, useParams } from "react-router-dom"
import { FormSelector } from "../Molecules/FormSelect"
import FormInputAlt from '../Molecules/FormInputAlt'
import { FuncionesDeTiempo, createTimeFromString, getErrorMessage, validateVarious } from '../Domain/Utils'
import { workWeekDays } from "../Utils/WeekDaysOption"

export const ModalCreacion = (props) => {

  const { id } = useParams()
  const [assignment, setAssignment] = useState(new Assignment())
  const [materiaList, setMateriaList] = useState([])
  const location = useLocation()
  const toast = useToast()

    useEffect( () => {
      getMaterias()
    }, [])

    const getMaterias = async () => {
        const materias = await materiaService.getSubjects()
        setMateriaList(materias)
    }
    
    const updateAssignment = (reference,value) => {
      assignment[reference] = value
      setAssignment({...assignment})
    }

    const handleDiaSemanaChange = (event) => {
      updateAssignment("dia",event.target.value)
    }
  
    const handleHoraInicioChange = (event) => {
      updateAssignment("horaInicio",event.target.value)
    }
  
    const handleMateriaChange = (event) => {
      updateAssignment("idMateria",event.target.value)
    }
  
    const handleHoraFinChange = (event) => {
      updateAssignment("horaFin",event.target.value)
    }

    const validateDuration = (timeStart, timeEnd) => {
      const start = createTimeFromString(timeStart)
      const end = createTimeFromString(timeEnd)
      return FuncionesDeTiempo.tiempoEntre(start,end) <= 0
    }
  
    const validateTimeLimit = (timeStart, timeEnd) => {
      const start = createTimeFromString(timeStart)
      const end = createTimeFromString(timeEnd)
  
      return start.getHours() < 8 || (end.getHours() >= 22 && end.getMinutes() > 0 )
    }

    const createAssignment = async() => {

      assignment.idAula = id
      try{
        await classroomService.createAsignacion(location.state.id,assignment)
        
        props.handleSaveButton()
  
      }catch(err){
        toast({
          position: 'bottom-left',
          duration: 5000,
          status: 'error',
          isClosable: true,
          description: getErrorMessage(err)
        })
      }
      props.onClose()
    }

    const validateHoraInicio = assignment.horaInicio !== ""
    const validateHoraFin = assignment.horaFin !== ""
    const validateidMateria = assignment.idMateria !== ""
    const validateDia = assignment.dia !== ""

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Creacion de Asignacion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormSelector state={assignment.idMateria} label={"Materia"} placeholder={"Seleccione una Materia"} handleChange={handleMateriaChange} options={
              materiaList.map((materia) => {
                return <option key={materia.id} value={materia.id}>{materia.nombre}</option>
              })
            }></FormSelector>
            
            <Flex gap={"10px"}>
                <FormInputAlt state={assignment.horaInicio} handleChange={handleHoraInicioChange} label={"Hora Inicio"} type={"time"}></FormInputAlt>
                <FormInputAlt state={assignment.horaFin} handleChange={handleHoraFinChange} label={"Hora Fin"} type={"time"}></FormInputAlt>
            </Flex>

            { (validateHoraInicio && validateHoraFin && validateDuration(assignment.horaInicio, assignment.horaFin)) && <Text color={"red"}>Ingrese una hora valida</Text> }
            { (validateHoraInicio && validateHoraFin && validateTimeLimit(assignment.horaInicio, assignment.horaFin)) && <Text color={"red"}>Ingrese una hora entre 8:00 AM y 10:00 PM</Text> }

            <FormSelector state={assignment.dia} handleChange={handleDiaSemanaChange} label={"Dia de la semana"} placeholder={"Seleccione un Dia"} options={workWeekDays()}></FormSelector>

          </ModalBody>

          <ModalFooter>
              <Button colorScheme='blackAlpha' mr={3} onClick={props.onClose}>Cerrar</Button>
              <Button isDisabled={!validateVarious([!validateDuration(assignment.horaInicio, assignment.horaFin),!validateTimeLimit(assignment.horaInicio,assignment.horaFin),validateDia,validateidMateria,validateHoraFin,validateHoraInicio]) } colorScheme="blue" mr={3} onClick={createAssignment}>Crear</Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

//Crea los props del modal
ModalCreacion.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    aula: PropTypes.object.isRequired,
    handleSaveButton: PropTypes.func.isRequired,
}


export default ModalCreacion
