/* eslint-disable no-unused-vars */
import React from "react"
import { AlertDialog, AlertDialogContent, AlertDialogOverlay, AlertDialogFooter, AlertDialogHeader, AlertDialogBody
        ,Tr, Td, IconButton, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalHeader, useDisclosure, useToast, Button } from '@chakra-ui/react'
import { ADMIN_ROLE, ASIGNADOR_ROLE, getErrorMessage } from '../Domain/Utils'
import PropTypes from 'prop-types'
import { FormSelector } from "./FormSelect"
import { FaPen, FaTrashAlt, FaSave } from "react-icons/fa"
import { useEffect } from "react"
import { useState } from "react"
import { adminService } from "../Service/AdminService"
import FormInput from "./FormInput"
import FormInputAlt from "./FormInputAlt"
import "./AdminInfoRow.css"
import { useLocation } from "react-router-dom"

export const AdminInfoRow = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
    const [account,setAccount] = useState(props.account)
    const [editFlag,setEditFlag] = useState(false)
    const location = useLocation()
    const toast = useToast()

    const roleOptions = () => {
        return (
            <>
                <option value={ADMIN_ROLE}>Administrador</option>
                <option value={ASIGNADOR_ROLE}>Asignador</option>
            </>
        )
    }

    const update = async (reference,value) => {
        setEditFlag(true)
        account[reference] = value
        setAccount({...account})
    }

    const handleUserRoleChange = (role) =>{
        update("rol",role.target.value)
    }

    const handleUserNameChange = (name) =>{
        update("nombreUsuario",name.target.value)
    }

    const saveChanges = async () => {
        try{
            await adminService.updateAccount(location.state.id, account)

            toast({
                title: 'Error',
                description: "Se han guardados los cambios con exito",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            setEditFlag(false)
        }catch(error){
            toast({
                title: 'Error',
                description: getErrorMessage(error),
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const deleteClickFunc = async() => {

        if(location.state.id == props.account.id){
            toast({
                title: 'Error',
                description: "No se puede borrar la cuenta con la que se esta logueado.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }else{
            setIsDeleteAlertOpen(true)
        }

    }

    const handleDeleteConfirmation = async () => {
        setIsDeleteAlertOpen(false)
        try{
            await adminService.deleteAccount(location.state.id, props.account.id)
        }catch(error) {
            toast({
                title: 'Error',
                description: getErrorMessage(error),
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        props.reload()
    }

    return (
        <>
            <Tr>
                <Td width={"150px"}>
                    <FormInputAlt state={account.nombreUsuario} handleChange={handleUserNameChange}/>
                </Td>

                <Td> <FormSelector isDisabled={location.state.id == props.account.id} state={account.rol} options={roleOptions()} handleChange={handleUserRoleChange} /> </Td>

                <Td className='tableOptions'>
                    <IconButton isDisabled={!editFlag} onClick={saveChanges} className='iconButton' icon={<FaSave/>}/>
                    <IconButton onClick={deleteClickFunc} className='iconButton delete' icon={<FaTrashAlt/>}/>
                </Td>
            </Tr>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader textAlign={"center"} > Editar Cuenta </ModalHeader>

                    <ModalBody>

                        <FormInputAlt label={"Nueva Contraseña"} placeholder={"Ingrese la nueva contraseña"}></FormInputAlt>

                        <FormInputAlt label={"Repita la Contraseña"} placeholder={"Repita la nueva contraseña"}></FormInputAlt>
                        
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>Cerrar</Button>
                        <Button colorScheme="blue" mr={3}>Actualizar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> 
            <AlertDialog
                isOpen={isDeleteAlertOpen}
                leastDestructiveRef={undefined}
                onClose={() => setIsDeleteAlertOpen(false)}
            >
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold" textColor="white" background="black" >
                        Confirmación
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        ¿Estás seguro de que quieres borrar esta cuenta? Esta acción sera irreversible.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button onClick={() => setIsDeleteAlertOpen(false)}>
                            Cancelar
                        </Button>
                        <Button colorScheme="red" onClick={handleDeleteConfirmation} ml={3}>
                            Borrar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )

}

AdminInfoRow.propTypes = {
    account: PropTypes.object,
    reload: PropTypes.func.isRequired
}