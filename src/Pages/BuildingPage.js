/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AspectRatio, Box, Button, Flex, Grid,Spinner,Text } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import ClassroomCard from '../Molecules/ClassroomCard'
import { TornaviasPB } from '../SVG/TornaviasPB'
import SideBar from '../Molecules/SideBar'
import { InfoCard } from '../Organisms/InfoCard'
import { SVGMaps } from '../Utils/SVGMapsStruct'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { buildingService } from '../Service/BuildingService'
import { BuildingMap } from '../Organisms/BuildingMap'
import "./BuildingPage.css"
import { materiaService } from '../Service/MateriaService'


export const BuildingPage = () => {

    const [active,setActive] = useState(false)
    const [level, setLevel] = useState(0)
    const [building, setBuilding] = useState({})
    const [subjects, setSubjects] = useState([])
    const [infoCardContent,setInfoCardContent] = useState({})
    const { id } = useParams()
    

    useEffect(() => {
        getBuilding()
        getSubjects()
    },[])

    const getBuilding = async() => {
        const aux = await buildingService.getBuildingById(id)
        setBuilding(aux)
    }

    const getSubjects = async() => {

        const auxSubjects = await materiaService.getCurrentSubjects(id)
        setSubjects(auxSubjects)
    }

    const showCard = () =>{
        setActive(true)
    }

    const closeCard = () =>{
        setActive(false)
    }

    const increaseFloor = () => {
        setLevel(level + 1)
    }

    const decreaseFloor = () => {
        setLevel(level - 1)
    }

    const handleinfoCardContentChange = (content) => {
        setInfoCardContent(content)
    }

    return (
        <Flex className='pageContainer'>
            <Header></Header>

            <Flex className='mainSection'>
                <SideBar 
                    bodyContent={
                        <Flex className='classroomContainer'>
                            {subjects.map( (it) => {
                                return <ClassroomCard key={it.idAula} infoObject={it} ></ClassroomCard>
                            } )}
                            {subjects.length == 0 && <Text>No hay materias cursando actualmente</Text>}
                        </Flex>
                    }
                    drawerTitle={"Listado de Aulas"}
                />

                {(building.nombreSVG) && <BuildingMap setCardFunc={handleinfoCardContentChange} SVGName={building.nombreSVG} showCardFunc={showCard} floorNumber={level} increaseFunc={increaseFloor} decreaseFunc={decreaseFloor}></BuildingMap>}
                {(!building.nombreSVG) && <div > 
                    <Spinner
                    position={'fixed'}
                    left={"50%"}
                    top={"50%"}
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    />
                </div>}
            </Flex>
            
            <InfoCard content={infoCardContent} isOn={active} closeCardFunc={closeCard}></InfoCard>
        </Flex>
    )

}
