import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { createContext } from "react"
import PropTypes from 'prop-types'

export const RouteStateContext = createContext()

export const Provider = ( {children} ) => {

    const [creatingRoute, setCreatingRoute] = useState(false)
    const [createdRoute, setCreatedRoute] = useState(false)
    const toast = useToast()
    const showErrorFunction = (err) => {

        toast({
            position: 'bottom-left',
            duration: 5000,
            status: 'error',
            isClosable: true,
            description: err
        })

    }

    const value = {
        creatingRoute,createdRoute,setCreatingRoute,setCreatedRoute,showErrorFunction
      }

    return (
        <RouteStateContext.Provider value={value}>
          {children}
        </RouteStateContext.Provider>
      )

}

Provider.propTypes = {
    children: PropTypes.any
}