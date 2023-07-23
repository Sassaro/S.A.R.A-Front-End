/* eslint-disable no-unused-vars */
import React from 'react'
import { Flex, Text,Image, Box } from '@chakra-ui/react'
import Dropdown from '../Molecules/Dropdown'
import { useLocation } from 'react-router-dom'
import "./Header.css"

export const Header = () => {

    const location = useLocation()

    return (
        <>
            <Flex className='header'>
                <Box height={"100%"}>
                    <Image className='logo-image' src={require("../Images/LOGO S.A.R.A White.png")} alt='Logo' />
                </Box>
                <Dropdown></Dropdown>
            </Flex>
        </>
    )

}
