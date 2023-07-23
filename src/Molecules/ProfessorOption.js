/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react"
import ProfessorForm from "../Organisms/ProfessorForm"
import { useState } from "react"
import { useEffect } from "react"
import { professorService } from "../Service/ProfessorService"

export const ProfessorOption = () => {

    const [professorList, setProfessorList] = useState([])
    
    const getProfessors = async () => {
        
        const auxProfessors = await professorService.getProfesores()
        setProfessorList(auxProfessors)
    }

    useEffect( () => {

        getProfessors()

    }, [])

    return (
        <Flex className="optionContainer">
            <ProfessorForm updateFunction={getProfessors}></ProfessorForm>
            <ProfessorForm updateFunction={getProfessors} professorList={professorList} editMode={true}></ProfessorForm>
        </Flex>
    )

}

export default ProfessorForm