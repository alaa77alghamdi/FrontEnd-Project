import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import About from './Compont/About&Con/About'


function App() {

  return (
    <ChakraProvider>

<div>
      <About></About> 
       </div>
    </ChakraProvider>

     
  )
}

export default App
