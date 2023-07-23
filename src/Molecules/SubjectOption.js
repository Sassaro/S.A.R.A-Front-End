/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Button, Center, Divider, Flex,Input,Select,Text } from "@chakra-ui/react"
import CustomButton from '../Atoms/CustomButton'
import "./SubjectOption.css"
import FormInputAlt from './FormInputAlt'
import { FormSelector } from './FormSelect'
import { professorService } from '../Service/ProfessorService'
import { materiaService } from '../Service/MateriaService'
import SubjectForm from '../Organisms/SubjectForm'

export const SubjectOption = () => {

    const [materiaList, setMateriaList] = useState([])
    const [profesoresList, setProfesoresList] = useState([])

    const getMaterias = async () => {
        const materias = await materiaService.getSubjects()
        setMateriaList(materias)
    }

    const getProfessors = async () => {
        const profesores = await professorService.getProfesores()
        setProfesoresList(profesores)
    }

    useEffect( () => {

        getProfessors()
        getMaterias()

    }, [])

    return(
        <Flex className='optionContainer'>
            <SubjectForm 
                professorList={profesoresList} 
                updateFunction={getMaterias}
            />
        
            <SubjectForm 
                professorList={profesoresList} 
                subjectList={materiaList}
                updateFunction={getMaterias}
                editMode={true}
            />
        </Flex>

    )
}