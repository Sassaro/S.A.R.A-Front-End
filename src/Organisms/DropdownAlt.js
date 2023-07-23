/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import {Menu,MenuButton,MenuList,MenuItem,Box,Flex,Text} from '@chakra-ui/react'
import { FaBars,FaWrench,FaSignOutAlt,FaUser,FaMapMarkedAlt } from "react-icons/fa"
import { MdMoreVert } from "react-icons/md"
import { ADMIN_ROLE } from '../Domain/Utils'
import { useLocation, useNavigate } from 'react-router-dom'
import "./DropdownAlt.css"


export const DropdownAlt = (props) => {

    const navigate = useNavigate()
    const location = useLocation()

    const navigateToMain = () => {

        if(location.state){
            navigate("/",{state: location.state})
        }else{
            navigate("/")
        }
    }

    const closeAccount = () => {
        navigate("/")
    }

    const navigateToLogin = () => {
        navigate("/login")
    }

    const navigateToSettings=() => {
        navigate("/settings",{state: location.state})
    }

    return (
        <Flex className='dropdownAltButton'>

            <Menu>
                <MenuButton> <MdMoreVert fontSize={"30px"} color='white'/> </MenuButton>
                <MenuList className='dropdownAltList'>
                    <MenuItem className='dropdownAltListItem' onClick={navigateToMain}>Mapa <FaMapMarkedAlt className='icon'></FaMapMarkedAlt></MenuItem>
                    {(!location.state) && <MenuItem className='dropdownAltListItem' onClick={navigateToLogin}> Ingresar <FaUser className='icon'></FaUser></MenuItem>}
                    {(location.state && location.state.rol == ADMIN_ROLE) && <MenuItem className='dropdownAltListItem' onClick={navigateToSettings}> Opciones <FaWrench className='icon'></FaWrench></MenuItem>}
                    {(location.state) && <MenuItem className='dropdownAltListItem' onClick={closeAccount}> Cerrar Sesion <FaSignOutAlt className='icon'></FaSignOutAlt></MenuItem>}
                </MenuList>
            </Menu>

        </Flex>
    )

}