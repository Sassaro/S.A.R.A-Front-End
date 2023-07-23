/* eslint-disable no-unused-vars */
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import React, { useState } from 'react'
import ClassroomCard from './ClassroomCard'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import "./SideBar.css"

export const SideBar = (props) => {

    const [sidebar, setSidebar] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return(
        <>
            <Button colorScheme='blue' ref={btnRef} onClick={onOpen} className="sideBar-button"> <FaChevronRight/></Button>
            <Drawer
                size={"sm"}
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton color={"whitesmoke"} />
                <DrawerHeader color={"whitesmoke"} className="sideBar-drawer" fontSize={"x-large"}>{props.drawerTitle}</DrawerHeader>

                <DrawerBody className="sideBar-drawer" >
                    {props.bodyContent}
                </DrawerBody>


                <DrawerFooter className="sideBar-drawer">
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideBar

SideBar.propTypes = {
    classroomInfo: PropTypes.array,
    bodyContent: PropTypes.any,
    drawerTitle: PropTypes.string,
}
