/* eslint-disable no-unused-vars */
import { HStack, Box, Text, Flex, useToast,Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay, } from '@chakra-ui/react'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import CustomButton from '../Atoms/CustomButton'
import PropTypes from 'prop-types'
import FormInputAlt from '../Molecules/FormInputAlt'
import { professorService } from '../Service/ProfessorService'
import { getErrorMessage } from '../Domain/Utils'
import { FormSelector } from '../Molecules/FormSelect'
import { materiaService } from '../Service/MateriaService'
import { useLocation } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'

const SubjectForm = (props) => {
    
    const toast = useToast()
    const location = useLocation()
    const [professorSelection, setProfessorSelection] = useState()
    const [subjectSelection, setSubjectSelection] = useState()
    const [editSubjectFlag, setEditSubjectFlag] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [subject, setSubject] = useState({
        id:-1,
        nombre: "",
        profesores: []
    })

    const [error, setError] = useState({
        nombre: false,
        profesor: false,
    })

    const updateMateria = e => {
        subject[e.target.name] = e.target.value
        setSubject({...subject})
        setEditSubjectFlag(true)
    }

    const handleProfessorSelectionChange = (selection) => {

        const value = selection.target.value

        if(value){
            setProfessorSelection(value)
        } else {
            setProfessorSelection()
        }
        
    }
    
    const handleClickAddProfessor = async () => {
        try {            
            const auxProfesor = await professorService.getProfesor(professorSelection)
            const doesExist = subject['profesores'].some((prof) => {
                return prof.id === auxProfesor.id
            }) 
            if(doesExist) {            
                toast({
                    position: 'bottom-left',
                    duration: 5000,
                    status: 'error',
                    isClosable: true,
                    description: "Profesor ya asignado"
                })
            } else {
                subject['profesores'].push(auxProfesor) 
                setSubject({...subject})
                setEditSubjectFlag(true)
            }
        } catch (error) {
            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'error',
                isClosable: true,
                description: "Profesor no encontrado"
            })
        }
    }

    const handleClickDeleteProfessor = (id) => {
        subject['profesores'] = subject['profesores'].filter( p => {
            return p.id !== id
        })

        setSubject({...subject})
        setEditSubjectFlag(true)
    }

    const handleSubjectSelectionChange = async (selection) => {
        const value = selection.target.value

        if(value){

            setSubjectSelection(value)
            const auxSubject = await materiaService.getSubject(value)

            setSubject(auxSubject)

            setEditSubjectFlag(false)
        }else{
            setSubject({
                id:-1,
                nombre: "",
                profesores: []
            })
        }
    }


    const validateField = (e) => {
        /* eslint-disable no-useless-escape */
        switch(e.target.type){
            case "text":
                    error[e.target.name] = e.target.value.length < 5
                } 
                setError({...error})
        }
    

    const validateAllFields = () => {
        const errors = Object.values(error).some( er => er === true )
        const nullSpaces = Object.values(subject).some( pr => pr == null || pr.length === 0 )

        return errors || nullSpaces
    }

    const handleSaveSubject = async (e) => {
        e.preventDefault()

        try {
            await materiaService.createSubject(location.state.id,subject)
            props.updateFunction()

            await props.updateFunction()

            setEditSubjectFlag(false)

            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'success',
                isClosable: true,
                description: 'Materia guardada correctamente'
            })

            if(!props.editMode){
                setSubject({
                    id:-1,
                    nombre: "",
                    profesores: []
                })
            }


        } catch (error) {
            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'error',
                isClosable: true,
                description: getErrorMessage(error)
            })
        }
    }

    const deleteSubject = async () => {

        try{
            console.log(subject.id)
            await materiaService.deleteSubject(location.state.id, subject.id)

            setSubject({
                id:-1,
                nombre: "",
                profesores: []
            })

            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'success',
                isClosable: true,
                description: 'Materia borrada correctamente'
            })

            await props.updateFunction()

            onClose()

        }catch(error){
            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'error',
                isClosable: true,
                description: getErrorMessage(error)
            })
        }
    }

    return (
        <>
            <Flex className='subjectOption'>
                <Flex flexDirection={"column"} width={'100%'} maxWidth={'500px'}>

                    <Box borderBottom={"1px solid black"} width={"90%"}>
                        <Text fontSize={"3xl"}>{props.editMode? "Editar Materia" : "Registrar Materia"}</Text> 
                    </Box>

                    <Flex flexDirection={"column"} alignContent={"center"} paddingTop={"10px"}>
                        {props.editMode &&
                        <FormSelector label={"Materia"} placeholder={"Materia"} value={subjectSelection} handleChange={handleSubjectSelectionChange} options={
                            props.subjectList.map((option) => { 
                                return <option key={option.id} value={option.id}>{option.nombre}</option> })
                        }></FormSelector>
                        }
                        <Flex className='subjectForm' alignItems={'center'}>
                            <FormInputAlt label={"Nombre"} name={"nombre"} placeholder={"Materia"} isRequired={true} state={subject.nombre} errorText={"Por favor, ingresar un nombre"} errorCondition={error.nombre} handleChange={(e) => updateMateria(e)} onBlur={(e) => validateField(e)}></FormInputAlt>
                            <FormSelector label={"Profesor"} placeholder={"Profesor"} value={professorSelection} handleChange={handleProfessorSelectionChange} multiSelect={true} options={
                                props.professorList.map((option) => { 
                                    return <option key={option.id} value={option.id}>{option.nombre + " " + option.apellido}</option> })
                            }></FormSelector>
                            <Flex mt={4}>
                                <Button colorScheme='blue' onClick={handleClickAddProfessor}>Agregar</Button>
                            </Flex>
                        </Flex>
                        
                        { <Flex gap={"10px"} flexDirection={"column"} alignItems={"center"}>
                            <Text>Profesores Asignados:</Text>
                            {subject.profesores.map( prof => {
                                return (
                                    <Flex key={prof.id} width={'50%'} justifyContent={'space-between'} alignItems={'center'} paddingTop={"5px"} paddingBottom={"5px"} paddingLeft={"10px"} paddingRight={"10px"} border={'1px solid black'} borderRadius={10}>
            
                                        <Text>{prof.nombre} {prof.apellido}</Text>
                                        <FaTrash color='red'cursor={'pointer'} onClick={(e) => {handleClickDeleteProfessor(prof.id)}}/>

                                    </Flex>   
                                )
                            }
                            )}
                        </Flex>
                        }

                        <Flex gap={5} mt={4}>
                            {!props.editMode && 
                            <Flex className='createSubjectButtonContainer'>
                                <Button colorScheme='blue' isDisabled={validateAllFields()} onClick={(e) => {handleSaveSubject(e)}}>Crear Materia </Button>
                            </Flex>}

                            {props.editMode && 
                            <Flex className='createSubjectButtonContainer'>
                                <Button colorScheme='blue' isDisabled={validateAllFields() || !editSubjectFlag} onClick={(e) => {handleSaveSubject(e)}}> Guardar Materia </Button>
                                <Button colorScheme='red' onClick={onOpen} isDisabled={validateAllFields()}>Eliminar Materia</Button>
                            </Flex>}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex> 

            <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
            >
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Borrar Materia
                </AlertDialogHeader>

                <AlertDialogBody>
                    Borrar una materia borrara todas las asignaciones de dicha materia
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button onClick={onClose}>
                    Cancelar
                </Button>
                <Button colorScheme='red' onClick={deleteSubject} ml={3}>
                    Borrar
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
            </AlertDialog>

        </>

    )
}

SubjectForm.propTypes = {
    editMode: PropTypes.bool,
    professorList: PropTypes.array,
    subjectList: PropTypes.array,
    updateFunction: PropTypes.func
}

export default SubjectForm

