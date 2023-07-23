/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Header } from '../Organisms/Header'
import UnsamMap from '../Organisms/UnsamMap'
import MapContext from '../Utils/MapContext'
import "./MainPage.css"

export const MainPage = () => {

    return (
        <Flex className='pageContainerMap'>
            <UnsamMap></UnsamMap>
        </Flex>
    )
}

export default MainPage