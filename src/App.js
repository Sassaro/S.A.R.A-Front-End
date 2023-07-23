/* eslint-disable no-unused-vars */
import {ChakraProvider,theme,} from '@chakra-ui/react'
import { PageRoutes } from './routes'
import "./Styles.css"
import { Provider } from './Contexts/RouteStateContext'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <PageRoutes/>
      </Provider>
    </ChakraProvider>
  )
}

export default App
