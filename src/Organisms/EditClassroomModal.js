/* eslint-disable no-unused-vars */
import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    useToast
  } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import "./EditClassroomModal.css"
import FormInputAlt from '../Molecules/FormInputAlt'
import { useState } from 'react'
import { classroomService } from '../Service/ClassroomService'
import { useLocation } from 'react-router-dom'
import { getErrorMessage } from '../Domain/Utils'

export const EditClassroomModal = (props) => {

    const [nombre,setNombre] = useState(props.aula.nombre)
    const [nombreSVG,setNombreSVG] = useState(props.aula.nombreSVG)
    const location = useLocation()
    const toast = useToast()

    const nombreHandleChange = (evt) => {
        setNombre(evt.target.value)
    }

    const nombreSVGHandleChange = (evt) => {
        setNombreSVG(evt.target.value)   
    }

    const saveChanges = async () => {

        try{
            
            await classroomService.updateClassroom(location.state.id, {id: props.aula.id,nombre: nombre, nombreSVG: nombreSVG})

            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'success',
                isClosable: true,
                description: "Se han guardado los cambios correctamente"
            })

            props.handleSaveButton()

            props.onClose()

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

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Aula</ModalHeader>
          <ModalCloseButton />

          <ModalBody>

            <Flex flexDirection={"column"} gap={"25px"}>

                <FormInputAlt label={"Cambiar nombre del aula"} state={nombre} handleChange={nombreHandleChange}></FormInputAlt>
                <FormInputAlt label={"Cambiar etiqueta del aula"} state={nombreSVG} handleChange={nombreSVGHandleChange}></FormInputAlt>

            </Flex>

          </ModalBody>

          <ModalFooter>

            <Flex gap={"10px"}>
                <Button onClick={props.onClose} colorScheme='gray'> Cancelar </Button>
                <Button onClick={saveChanges} colorScheme='blue'> Guardar Cambios </Button>
            </Flex>

          </ModalFooter>
        </ModalContent>
      </Modal>
    )

}

EditClassroomModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.any,
    aula: PropTypes.object,
    handleSaveButton: PropTypes.func
}