/* eslint-disable no-unused-vars */
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const DialogClausura = ({isOpen,onClose,cancelRef,closeClassroom,classroomStatus}) => {

    return(

        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            { classroomStatus? "Clausurar Aula" : "Habilitar Aula" }
            </AlertDialogHeader>

            <AlertDialogBody>
              { classroomStatus? "Clausurar el aula desasignara todas las materias, esta acción no se puede deshacer." : "Habilitar el aula permitira la asignación de aulas." }
              
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={closeClassroom} ml={3}>
                {classroomStatus? "Clausurar" : "Habilitar"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    )

}

DialogClausura.propTypes = {
    isOpen: PropTypes.any.isRequired,
    onClose: PropTypes.any.isRequired,
    cancelRef: PropTypes.any,
    closeClassroom: PropTypes.func,
    classroomStatus: PropTypes.bool
}