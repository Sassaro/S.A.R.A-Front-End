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
} from "@chakra-ui/react"
import PropTypes from 'prop-types'

export const ModalEvent = (props) => {

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar Asignacion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>¿Desea eliminar la asignacion {props.event.nombreMateria}?</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Cerrar
            </Button>
            <Button colorScheme="red" onClick={props.handleActionButton}>Eliminar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

//Crea los props del modal
ModalEvent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleActionButton: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
}


export default ModalEvent
