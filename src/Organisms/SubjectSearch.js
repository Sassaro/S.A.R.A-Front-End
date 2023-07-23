/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { Button, Flex, Input,Text } from '@chakra-ui/react'
import { useState } from 'react'
import { SubjectSearchCard } from '../Molecules/SubjectSearchCard'
import { materiaService } from '../Service/MateriaService'
import { FormSelector } from '../Molecules/FormSelect'
import PropTypes from 'prop-types'
import "./SubjectSearch.css"

export const SubjectSearch = (props) => {

    const [search, setSearch] = useState("")
    const [showCard, setShowCard] = useState(true)
    const [subjects, setSubjects] = useState([])
    const [subjectNames,setSubjectNames] = useState([])

    useEffect(() => {
        getNames()
    },[])

    const getNames = async() => {
        const aux = await materiaService.getSubjectNames()
        setSubjectNames(aux)
    }

    const handleSearchChange = (search) => {
        setSearch(search.target.value)
    }

    const searchSubject = async () => {
        if(showCard){
            clearInput()
        }else{
            setShowCard(true)
            const subjects = await materiaService.filterMateriaByName(search)

            setSubjects(subjects)
        }
    }

    const buttonIcon = () => {

        if(showCard){
            return <MdClose/>
        }else{
            return <FaSearch/>
        }
    }

    const clearInput = () => {
        setShowCard(false)
        setSearch("")
    }

    return (
        <>
            <Flex>
                <FormSelector extraClassname={"subjectSearchInput"} onFocusFunc={clearInput} placeholder={"Seleccione una materia"} handleChange={handleSearchChange} state={search} options={
                        subjectNames.map((option) => { 
                            return <option key={option} value={option}>{option}</option> })
                    }></FormSelector>
                <Button colorScheme='blue' isDisabled={search == ""} onClick={searchSubject} className='subjectSearchButton'> {buttonIcon()} </Button>
            </Flex>
            {(showCard) && 
                <Flex gap={"10px"} flexDirection={"column"}>
                    {subjects.map((subject) => {
                        return <SubjectSearchCard creatingRoute = {props.creatingRoute} changeCreatedRouteFlag={props.changeCreatedRouteFlag} changeCreatingRouteFlag={props.changeCreatingRouteFlag} subjectDTO={subject} key={subject.idAsignacion}></SubjectSearchCard>
                    })}
                </Flex>}
        </>
    )

}

SubjectSearch.propTypes = {
    creatingRoute: PropTypes.bool,
    changeCreatedRouteFlag: PropTypes.func,
    changeCreatingRouteFlag: PropTypes.func,
}