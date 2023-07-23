/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {Button,
    Divider,
    Flex,
    Text,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure, } from "@chakra-ui/react"
import { Header } from '../Organisms/Header'
import { FaChalkboardTeacher, FaKey, FaPencilRuler, FaTrashAlt } from "react-icons/fa"
import { useState } from 'react'
import CustomButton from '../Atoms/CustomButton'
import { SubjectOption } from '../Molecules/SubjectOption'
import { AdminOption } from '../Organisms/AdminOption'
import { ProfessorOption } from '../Molecules/ProfessorOption'
import "./SettingsPage.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { ADMIN_ROLE } from '../Domain/Utils'
import { adminService } from '../Service/AdminService'

export const SettingsPage = () => {

    const [option, setOption] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    

    const buttonClassname = (optionNumber,className,extraClassName) => {
        if (option == optionNumber){
            return className + ' ' + extraClassName
        }else{
            return className
        }
    }

    useEffect( () => {

        if(!location.state || location.state.rol != ADMIN_ROLE ){

            if(location.state){
                navigate("/",{state: location.state})
            }else{
                navigate("/")
            }
        }
    },[] )

    const deleteEverything = () =>{
        adminService.deleteAll(location.state.id)
        onClose()
    }

    if(!location.state || location.state.rol != ADMIN_ROLE){
        return(<></>)
    }else{
        return (
            <Flex className='pageContainer background'>
                <Header></Header>
                <Flex className='settingsMenuContainer'>
                    <Flex className='settingsMenu'>
                        <Flex className='settingsMenuSelectorContainer'>
                            <Flex className='settingsMenuSelector'>
    
                                <button onClick={() => { setOption(0)}} className={buttonClassname(0,"settingsMenuButton","settingsMenuButtonSelected")}> <FaChalkboardTeacher/> Profesores </button>
                                <button onClick={() => { setOption(1)}} className={buttonClassname(1,"settingsMenuButton","settingsMenuButtonSelected")}> <FaKey/> Cuentas administrador </button>
                                <button onClick={() => { setOption(2)}} className={buttonClassname(2,"settingsMenuButton","settingsMenuButtonSelected")}> <FaPencilRuler/> Materias </button>
                                <Divider className='settingsDivider' borderWidth={1} orientation='horizontal'></Divider>
                                <button onClick={() => { setOption(3)}} className={buttonClassname(3,"settingsMenuButton settingsMenuButtonDelete", "settingsMenuButtonDeleteSelected")}> <FaTrashAlt/> Desasignacion general </button>
    
                            </Flex>
                            <Divider className='settingsDivider' borderWidth={1} orientation='vertical'></Divider>
                        </Flex>  
    
                        {(option == 0) &&  
                            <ProfessorOption></ProfessorOption>
                        }
                        
                        {(option == 1) &&  
                            <AdminOption></AdminOption>
                        }
    
                        {(option == 2) && 
                        <>
                            <SubjectOption></SubjectOption>
                        </>
                        }
    
                        {(option == 3) &&  
                        <Flex className='settingsMenuContent'>
                            <Text className='selectionTitle'>Desasignacion general</Text>
                            <Flex className='settingsMenuContentOptions'>
                                <Flex className='settingsButtonContainer'>
                                        <Button colorScheme='red' onClick={onOpen}>Desasignar Materias</Button>
                                        <Text>Desasginar todas las materias</Text>
                                </Flex>   
                            </Flex>
                        </Flex> }
                    </Flex>
                </Flex>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Desasignar Todas las materias
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            ¿Estás seguro que quieres borrar todas las asignaciones? Esta acción sera irreversible.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='red' onClick={deleteEverything} ml={3}>
                            Borrar
                        </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>

            </Flex>
        )

    }

}