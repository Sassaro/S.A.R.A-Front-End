/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { useToast, Box, Flex, Input, Text, TableContainer, FormErrorMessage, ModalFooter, Table,Thead,Tr,Th,Tbody,Td,ModalBody, Button,IconButton, Modal, ModalOverlay, ModalContent,ModalHeader, useDisclosure, Select  } from '@chakra-ui/react'
import React from 'react'
import { FormInputAlt } from '../Molecules/FormInputAlt'
import { FormSelector } from '../Molecules/FormSelect'
import { useState } from 'react'
import { useEffect } from 'react'
import { adminService } from '../Service/AdminService'
import { AdminInfoRow } from '../Molecules/AdminInfoRow'
import { NewAccount } from '../Domain/NewAccount'
import { ADMIN_ROLE, ASIGNADOR_ROLE, getErrorMessage } from '../Domain/Utils'
import { useLocation } from "react-router-dom"
import "./AdminOption.css"

export const AdminOption = () => {

    const [accounts, setAccounts] = useState([])
    const [newAccount, setNewAccount] = useState(new NewAccount())
    const [confirmarContrasenia, setConfirmarContrasenia] = useState('')
    const [isLoadingFlag,setIsLoadingFlag] = useState(false)
    const toast = useToast()
    const location = useLocation()

    useEffect( () => {
        getAccounts()
    },[] )

    const getAccounts = async () => {
        let auxAccounts = await adminService.getAccounts() 
        setAccounts(auxAccounts)
    }

    const update = (reference,value) => {
        newAccount[reference] = value
        setNewAccount({...newAccount})
    }

    const handleUsernameChange = (username) => {
        update("usuario",username.target.value)
    }

    const handlePasswordChange = (password) => {
        update("contrasenia",password.target.value)
    }
    
    const handleSelector = (selector) => {
        update("tipo",selector.target.value)
    }

    const handleCrearCuenta = async() => {
        if(newAccount['contrasenia'] === confirmarContrasenia && newAccount['tipo'] != ""){

            setIsLoadingFlag(true)
            const response = await adminService.createAccount(newAccount, location.state)
            setIsLoadingFlag(false)

            if(response === true){
                toast({
                    title: "Exito",
                    description: "La cuenta ha sido creada",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })

                setNewAccount(new NewAccount())
                setConfirmarContrasenia("")

                getAccounts()
            }else {
                toast({
                    title: "Error",
                    description: "Ya existe una cuenta con ese Usuario",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        }else{
            toast({
                title: "Error",
                description: "Las contraseñas no coinciden",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const roleOptions = () => {
        return (
            <>
                <option value={ADMIN_ROLE}>Administrador</option>
                <option value={ASIGNADOR_ROLE}>Asignador</option>
            </>
        )
    }

    const buttonDisabledCondition = newAccount.usuario === "" || newAccount.contrasenia === "" || newAccount.tipo === ""

    return (

    <>
        <Flex className='optionContainer'>
            <Flex className='adminOptionForm'>
                <Box borderBottom={"1px solid black"} width={"90%"}>
                    <Text fontSize={"3xl"}>Crear Cuenta</Text> 
                </Box>
            
                <FormInputAlt isRequired={true} state={newAccount.usuario} label={"Nombre"} placeholder={"Nombre"} handleChange={handleUsernameChange}></FormInputAlt>
                <FormInputAlt isRequired={true} state={newAccount.contrasenia} type={"password"} label={"Contraseña"} placeholder={"Contraseña"} handleChange={handlePasswordChange}></FormInputAlt>
                <FormInputAlt isRequired={true} state={confirmarContrasenia} type={"password"} label={"Confirmar Contraseña"} placeholder={"Confirmar Contraseña"} handleChange={(e) => setConfirmarContrasenia(e.target.value)}></FormInputAlt>
                <FormSelector state={newAccount.tipo}  options={roleOptions()} handleChange={handleSelector} placeholder={"Seleccione una opcion..."}/>
                <Flex width={"100%"} justifyContent={"center"}>
                    <Button loadingText='Creando' isLoading={isLoadingFlag} isDisabled={buttonDisabledCondition} Button width={"min-content"} colorScheme='blue' onClick={handleCrearCuenta}> Crear Cuenta </Button>
                </Flex>
                
            </Flex>

            <Flex className='adminOptionForm'>
                <Box borderBottom={"1px solid black"} width={"90%"}>
                    <Text fontSize={"3xl"}>Editar Cuenta</Text> 
                </Box>

                <TableContainer marginTop={"20px"}>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>Cuenta</Th>
                                <Th>Permisos</Th>
                                <Th>Opciones</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {accounts.map( (account) => {
                                return <AdminInfoRow key={account.id} account={account} reload={getAccounts} />
                            } )}
                        </Tbody>
                    </Table>
                </TableContainer>

            </Flex>
        </Flex>
    </>
    )

}