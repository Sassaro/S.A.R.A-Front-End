/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import "./SubjectSearchAlt.css"
import { Button, Flex, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { materiaService } from '../Service/MateriaService'
import { SubjectSearchCard } from '../Molecules/SubjectSearchCard'

export const SubjectSearchAlt = (props) => {

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

    return(
        <Flex className='subjectSearchAltWrapper'>
            <Flex className='subjectSearchAltSelectWrapper'>
                <Select value={search} onFocus={clearInput} onChange={handleSearchChange} color={"white"} className='subjectSearchAltSelect' placeholder='Seleccione una materia'>
                    {subjectNames.map((option) => { return <option key={option} value={option}>{option}</option> })}
                </Select>
                <Button onClick={searchSubject} isDisabled={search == ""} className='subjectSearchAltButton' colorScheme='blue'> {buttonIcon()} </Button>
            </Flex>

                {(showCard) && 
                    <Flex gap={"10px"} flexDirection={"column"} marginTop={"10px"}>
                        {subjects.map((subject) => {
                            return <SubjectSearchCard
                            closeCardsFunc={clearInput}
                            creatingRoute = {props.creatingRoute} 
                            changeCreatedRouteFlag={props.changeCreatedRouteFlag} 
                            changeCreatingRouteFlag={props.changeCreatingRouteFlag} 
                            subjectDTO={subject} 
                            key={subject.idAsignacion}></SubjectSearchCard>
                        })}
                    </Flex>}
        </Flex>
    )

}

SubjectSearchAlt.propTypes = {
    creatingRoute: PropTypes.bool,
    changeCreatedRouteFlag: PropTypes.func,
    changeCreatingRouteFlag: PropTypes.func,
}