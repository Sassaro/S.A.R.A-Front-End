/* eslint-disable no-unused-vars */
import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Box,Flex,Text} from '@chakra-ui/react'
import { FaBars,FaWrench,FaSignOutAlt,FaUser,FaMapMarkedAlt,FaHome } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import "./Dropdown.css"
import { ADMIN_ROLE } from '../Domain/Utils'

export const Dropdown = () => {

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
        <>
            <Menu>
                <MenuButton className="dropdown"> <FaBars className='icon'></FaBars> </MenuButton>
                <MenuList className='dropdownList'>
                    <MenuItem onClick={navigateToMain} className='dropdownItem'>Mapa <FaMapMarkedAlt className='icon'></FaMapMarkedAlt></MenuItem>
                    {(!location.state) && <MenuItem onClick={navigateToLogin} className='dropdownItem'> Ingresar <FaUser className='icon'></FaUser></MenuItem>}
                    {(location.state && location.state.rol == ADMIN_ROLE) && <MenuItem onClick={navigateToSettings} className='dropdownItem'> Opciones <FaWrench className='icon'></FaWrench></MenuItem>}
                    {(location.state) && <MenuItem onClick={closeAccount} className='dropdownItem'> Cerrar Sesion <FaSignOutAlt className='icon'></FaSignOutAlt></MenuItem>}
                </MenuList>
            </Menu>
            
            <Box className="pageSelection">
                <Flex className="buttonGroup" onClick={navigateToMain}>
                    <FaMapMarkedAlt className='icon'></FaMapMarkedAlt>
                    <Text>Mapa</Text>
                </Flex>

                {(!location.state) && 
                    <Flex className="buttonGroup" onClick={navigateToLogin}>
                        <FaUser className='icon'></FaUser>
                        <Text>Ingresar</Text>
                    </Flex>
                }

                {(location.state && location.state.rol == ADMIN_ROLE) && 
                    <Flex className="buttonGroup" onClick={navigateToSettings}>
                        <FaWrench className='icon'></FaWrench>
                        <Text>Opciones</Text>
                    </Flex>
                }

                
                {(location.state) && 
                    <Flex className="buttonGroup" onClick={closeAccount}>
                        <FaSignOutAlt className='icon'></FaSignOutAlt>
                        <Text>Cerrar Sesion</Text>
                    </Flex>
                }

            </Box>
        </>
    )
}

export default Dropdown