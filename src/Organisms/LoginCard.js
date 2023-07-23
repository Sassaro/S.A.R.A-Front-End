/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Text, Toast, useToast, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FormInput from '../Molecules/FormInput'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../Atoms/CustomButton'
import { UserCredentials } from '../Domain/UserCredentials'
import "./LoginCard.css"
import { getErrorMessage, validateVarious } from '../Domain/Utils'
import { adminService } from '../Service/AdminService'


export const LoginCard = () => {

    const [userCredentials,setUserCredentials] = useState(new UserCredentials())
    const [clickFlag, setClickFlag] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()

    const update = (reference,value) => {
        userCredentials[reference] = value
        setUserCredentials({...userCredentials})
    }

    const handleUsernameChange = (username) => {
        update("usuario",username.target.value)
    }

    const handlePasswordChange = (password) => {
        update("contrasenia",password.target.value)
    }

    const logInFunction = async () => {
        setClickFlag(true)

        if(validateVarious([!usernameCondition,!passwordCondition])) {
            try{
                const user = await adminService.login(userCredentials)
                console.log(user)
                navigate("/",{state:{...user}})
            }catch(error){
                toast({
                    title: 'Error',
                    description: getErrorMessage(error),
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        }

    }

    const usernameCondition = userCredentials.usuario === ""

    const passwordCondition = userCredentials.contrasenia === ""

    return (

        <Flex className='loginCard'>
            <Flex alignItems={"center"} justifyContent={"center"} className='cardDecoration'>
            </Flex>
            <Flex className='loginForm'>
                <Flex className='title-wrapper'>
                    <Box height={"100%"}>
                        <Image className='logo-image' src={require("../Images/LOGO S.A.R.A Black.png")} alt='Logo' />
                    </Box>
                </Flex>
                <FormInput state={userCredentials.usuario} handleChange={handleUsernameChange} errorCondition={usernameCondition && clickFlag} dataTestIdErrorText={"errorUsername"} dataTestId={"username"} label={"Usuario"} helperText={"Ingrese su nombre de usuario."} errorText={"Por favor el nombre de usuario"} />
                <FormInput state={userCredentials.contrasenia} handleChange={handlePasswordChange} errorCondition={passwordCondition && clickFlag} dataTestIdErrorText={"errorPassword"} dataTestId={"password"} type={"password"} label={"Contraseña"} helperText={"Ingrese su Contraseña"} errorText={"Por favor ingrese su Contraseña"} />
                <Button colorScheme='blue' dataTestId={"loginButton"} onClick={logInFunction} className='loginButton'>Ingresar</Button>
            </Flex>

            <Box className='cardDecoration'></Box>
        </Flex>

    )

}


