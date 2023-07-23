/* eslint-disable no-unused-vars */
import { VStack, Box, Text, Flex, useToast,Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { barbie } from '../Utils/MockedData'
import { useLocation, useParams } from 'react-router-dom/dist'
import PropTypes from 'prop-types'
import FormInputAlt from '../Molecules/FormInputAlt'
import { professorService } from '../Service/ProfessorService'
import { getErrorMessage } from '../Domain/Utils'
import { FormSelector } from '../Molecules/FormSelect'

const ProfessorForm = (props) => {

    const profId = useParams("id")
    const toast = useToast()
    const [selection, setSelection] = useState()
    const [editProfFlag,setEditProfFlag] = useState(false)
    const REG_EXP_DNI = new RegExp(/\b\d{7,9}\b/)
    const location = useLocation()

    const [professor, setProfessor] = useState({
        id: -1,
        nombre: "",
        apellido: "",
        dni: "",
    })

    const [error, setError] = useState({
        nombre: false,
        apellido: false,
        dni: false,
    })

    const updateProfessor = e => {
        professor[e.target.name] = e.target.value
        setProfessor({...professor})
        setEditProfFlag(true)
    }

    const validateField = (e) => {
        /* eslint-disable no-useless-escape */
        switch(e.target.type){
            case "text":
                if(e.target.name.includes("dni")){
                    error[e.target.name] = !e.target.value.match(REG_EXP_DNI)
                }
                else {
                    error[e.target.name] = e.target.value === ""
                } 
                setError({...error})
                    
        }
    }

    const handleSubmit = async() => {
        
        try{
            await professorService.crearProfesor(location.state.id,professor)

            toast({
                position: 'bottom-left',
                duration: 5000,
                status: 'success',
                isClosable: true,
                description: "Se ha registrado el profesor correctamente"
            })
            props.updateFunction()
            setEditProfFlag(false)

            if(!props.editMode){
                setProfessor({
                    id: -1,
                    nombre: "",
                    apellido: "",
                    dni: "",
                })
            }

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

    const handleDelete = async () => {
        try{
            await professorService.borrarProfesor(location.state.id,selection)

            props.updateFunction()

            setProfessor({
                id: -1,
                nombre: "",
                apellido: "",
                dni: "",
            })

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

    const handleSelectionChange = async (selection) => {

        const value = selection.target.value

        if(value){

            setSelection(value)

            const auxProfesor = await professorService.getProfesor(value)
    
            setProfessor(auxProfesor)

            setEditProfFlag(false)

        }else{
            setProfessor({
                id: -1,
                nombre: "",
                apellido: "",
                dni: "",
            })
        }

    }

    const buttonDisbledCondition = professor.nombre === "" || professor.apellido === "" || !professor.dni.match(REG_EXP_DNI)

    return (
        <Flex flexDirection={"column"} width={'100%'} maxWidth={'500px'}>
            <Box borderBottom={"1px solid black"} width={"90%"}>
                {!props.editMode ? 
                <Text fontSize={"3xl"}>Ingresar profesor</Text> 
                :
                <Text fontSize={"3xl"}>Editar profesor</Text>} 
            </Box>
            <VStack alignContent={"center"} paddingTop={"10px"} >

                {(props.editMode) && 

                    <FormSelector label={"Profesor"} placeholder={"Seleccionar Profesor"} value={selection} handleChange={handleSelectionChange} options={
                        props.professorList.map((option) => { 
                            return <option key={option.id} value={option.id}>{option.nombre + " " + option.apellido}</option> })
                    }></FormSelector>

                }

                <FormInputAlt isDisabled = {props.editMode && selection == null} placeholder={"Nombre"} type={"text"} name={"nombre"} isRequired={true} state={professor.nombre} label={'Nombre'} errorText={"Por favor, ingresar un nombre"} errorCondition={error.nombre} handleChange={ e => updateProfessor(e)} onBlur={e => validateField(e)}></FormInputAlt>
                
                <FormInputAlt isDisabled = {props.editMode && selection == null} placeholder={"Apellido"} type={"text"} name={"apellido"} isRequired={true} state={professor.apellido} label={'Apellido'} errorText={"Por favor, ingresar un apellido"} errorCondition={error.apellido} handleChange={ e => updateProfessor(e)} onBlur={e => validateField(e)}></FormInputAlt>

                <FormInputAlt isDisabled = {props.editMode && selection == null } placeholder={"DNI"} type={"text"} name={"dni"} isRequired={true} state={professor.dni} label={'DNI'} helperText={"Por favor, ingresar un dni valido"} errorText={"Ingresar DNI sin espacios ni puntos"} errorCondition={error.dni} handleChange={ e => updateProfessor(e)} onBlur={e => validateField(e)}></FormInputAlt>

                <Flex gap={2}>
                    {props.editMode ? 
                        <>
                            <Button colorScheme='blue' isDisabled={buttonDisbledCondition || !editProfFlag} label={""} onClick={e => handleSubmit(e)}>Guardar</Button>
                            <Button colorScheme='red' isDisabled={buttonDisbledCondition} onClick={e => handleDelete(e)}>Eliminar</Button>
                        </>
                        :
                        <Button colorScheme='blue' isDisabled={buttonDisbledCondition} onClick={e => handleSubmit(e)}>Guardar</Button>
                    } 
                </Flex>
            </VStack>
        </Flex>
    )
}

export default ProfessorForm

ProfessorForm.propTypes = {
    editMode: PropTypes.bool,
    professorList: PropTypes.array,
    updateFunction: PropTypes.func
}