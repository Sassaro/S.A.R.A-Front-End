/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Flex, Text,Box, Button, useToast, useDisclosure,Spinner } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import SubHeader from '../Atoms/SubHeader'
import { ClassroomSubject } from '../Molecules/ClassroomSubject'
import { classroomService } from '../Service/ClassroomService'
import { Calendar } from '../Organisms/Calendar'
import { ButtonsPack } from '../Organisms/ButtonsPack'
import { useLocation, useParams } from 'react-router-dom'
import { DayPilot } from '@daypilot/daypilot-lite-react'
import { ADMIN_ROLE, getErrorMessage } from '../Domain/Utils'
import { AsignacionDTO } from '../Domain/AsignacionDTO'
import ModalCreacion from '../Organisms/ModalCreacion'
import { DialogClausura } from '../Organisms/DialogClausura'
import "./ClassroomPage.css"
import { EditClassroomModal } from '../Organisms/EditClassroomModal'

export const ClassroomPage = () => {

    const [classroom,setClassroom] = useState(null)
    const [edit,setEdit] = useState(false)
    //START_DATE se tiene que quedar en este, porque marca un dia lunes.
    const START_DATE = "2023-05-22"
    const DATE_FORMAT = "yyyy-MM-dd"
    const { id } = useParams()
    const [events, setEvents] = useState()
    const toast = useToast()
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenAlert, onOpen: onOpenAlert, onClose:onCloseAlert } = useDisclosure()
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose:onCloseEdit } = useDisclosure()
    const cancelRef = React.useRef()

    useEffect(() => {
        getAsignaciones()
        getClassroom()
      },[])
    
    const getAsignaciones = async() => {
      
      setEdit(false)
      const auxEvents = await classroomService.getClassroomAsignaciones(id)
      const convertedEvent = auxEvents.map( (event) => {
    
        const eventTransformed = convertToEvent(event)
        return eventTransformed
      } )    
      
      setEvents(convertedEvent)
      
    }
  
    const getClassroom = async () => {
      const auxAula =  await classroomService.getAulabyid(id)

      setClassroom(auxAula)
    }


    const generateEventDate = (dayOfWeek,hours,minutes) =>{
    
      const date = DayPilot.Date.parse(START_DATE, DATE_FORMAT)
    
      const dayDifference = dayOfWeek - date.dayOfWeek()
    
      const dateTransformed = date.addDays(dayDifference).addHours(hours).addMinutes(minutes)
    
      return dateTransformed
    }

    const convertToEvent = (event) => {
    
      const eventTimeStart = event.horaInicio.split(":")
      const eventTimeEnd = event.horaFin.split(":")
    
      return {
        id: event.id,
        text: event.nombreMateria,
        start: generateEventDate(event.dia,eventTimeStart[0],eventTimeStart[1]),
        end:  generateEventDate(event.dia,eventTimeEnd[0],eventTimeEnd[1])
      }
    }
    
    const convertToJson = (event) => {
    
      const json = {
        id: event.id,
        nombreMateria: event.text,
        horaInicio: event.start.toString().split("T")[1],
        horaFin: event.end.toString().split("T")[1],
        dia: event.start.dayOfWeek()
      }
    
      return json
    }
    
    const deleteEvent = async(id) => {
      await classroomService.deleteClassroomAsignaciones(location.state.id,id)
      updatePage()
    }

    const modifyEvent = async(id, adignacionDTO, config) => {
      await classroomService.modifyClassroomAsignaciones(id, adignacionDTO, config)
    }

    const saveChanges = async () => {

      try{
          const asignaciones = events.map( (event) => { return convertToJson(event) } )
          await classroomService.saveAsignaciones(location.state.id, asignaciones)

          toast({
              position: 'bottom-left',
              duration: 5000,
              status: 'success',
              isClosable: true,
              description: "Se han guardado los cambios correctamente"
          })
          setEdit(false)
          updatePage()

      }catch(err){
          toast({
              position: 'bottom-left',
              duration: 5000,
              status: 'error',
              isClosable: true,
              description: getErrorMessage(err)
          })
      }
  }

  const updatePage = () => {
    getClassroom()
    getAsignaciones()
  }

  const handleUpdateHabilitation = async () => {
    await classroomService.changeClassroomStatus(location.state.id,id, !classroom.habilitada)
    updatePage()
    onCloseAlert()
  }

  const handleEditChange = () => {
    setEdit(true)
  }

  const getProfessorsNames = (professors) => {

    return professors.map((prof) => { return (prof.nombre + " " + prof.apellido) })

  }

  if(!classroom){
    return (
      <div > 
        <Spinner
        position={'fixed'}
        left={"50%"}
        top={"50%"}
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
        </div>
    )
  }else{
    return (
      <Flex className='pageContainer'>
          <Header></Header>
          <SubHeader urlImage={"https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?cs=srgb&dl=pexels-element-digital-1370296.jpg&fm=jpg"} label={classroom.nombre}></SubHeader>
          
          {(location.state && location.state.rol == ADMIN_ROLE) && 
            <Flex padding={"10px"} width={"100%"} justifyContent={"space-between"}>
              <Button onClick={onOpenAlert} colorScheme={classroom.habilitada? "red" : "blue"}> {classroom.habilitada? "Clausurar Aula" : "Habilitar Aula"} </Button>
              <Button onClick={onOpenEdit} colorScheme={"blue"}> Editar Aula </Button>
            </Flex>
          }

          {(classroom.habilitada) && 
          <Flex className='classroomInfo'>
              { (classroom.materiaActual) ?
                <Box>
                  <Text className='infoTitle'> Actualmente Cursando: </Text>
                  <ClassroomSubject materia={classroom.materiaActual.nombreMateria} profesores={getProfessorsNames(classroom.materiaActual.profesores)} inicio={classroom.materiaActual.horaInicio} fin={classroom.materiaActual.horaFin}></ClassroomSubject>
                </Box>:

                <Box>
                  <Text className='infoTitle'> Siguiente Materia: </Text>
                  <Text paddingLeft={'10px'} fontSize={"20px"}> El aula esta actualmente vacia</Text>
                </Box>
              }


              { (classroom.materiaSiguiente) ?
                <Box>
                  <Text className='infoTitle'> Siguiente Materia: </Text>
                  <ClassroomSubject materia={classroom.materiaSiguiente.nombreMateria} profesores={getProfessorsNames(classroom.materiaSiguiente.profesores)} inicio={classroom.materiaSiguiente.horaInicio} fin={classroom.materiaSiguiente.horaFin}></ClassroomSubject>
                </Box> :

                <Box>
                  <Text className='infoTitle'> Siguiente Materia: </Text>
                  <Text paddingLeft={'10px'} fontSize={"20px"}> No hay materias asignadas a esta aula en el resto del dia</Text>
                </Box>
              }

              {(location.state) &&
                <Flex className='botoneraAsignacion'>
                  <Button colorScheme="blue" onClick={onOpen}>Crear Asignacion</Button>
                  <Flex gap={"10px"}>
                    <Button isDisabled={!edit} colorScheme="blue" onClick={saveChanges}>Guardar Cambios</Button>
                    <Button isDisabled={!edit} colorScheme="blue" onClick={getAsignaciones}>Cancelar</Button>
                  </Flex>
                </Flex>
              }

              <Box borderBottom={"1px solid black"} width={"100%"}>
                  <Text fontWeight={"bolder"} fontSize={"4xl"}>Calendario del Aula</Text> 
              </Box>

              <Calendar setEdit = {handleEditChange} events={events} startDate={START_DATE} deleteEvent={deleteEvent} modifyEvent={modifyEvent} getAsignaciones={updatePage}></Calendar>
              
          </Flex>}

          {(!classroom.habilitada) &&
            <Text fontWeight={"bold"} textAlign={"center"} fontSize={"4xl"}>El Aula esta clausurada Actualmente</Text>
          }
          
          <ModalCreacion isOpen = {isOpen} onClose={onClose} aula={classroom} handleSaveButton={updatePage}></ModalCreacion>
          <DialogClausura classroomStatus={classroom.habilitada} isOpen={isOpenAlert} onClose={onCloseAlert} cancelRef={cancelRef} closeClassroom={handleUpdateHabilitation}></DialogClausura>
          <EditClassroomModal isOpen={isOpenEdit} onClose={onCloseEdit} aula={classroom} handleSaveButton={updatePage} ></EditClassroomModal>
      </Flex>
  )

  }

}