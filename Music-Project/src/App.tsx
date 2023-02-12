import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import About from './Compont/About&Con/About'
import Profile from './Compont/About&Con/Profile'
import Contact from './Compont/About&Con/Contact'


function App() {

  return (
    <ChakraProvider>

<div>
      
      <Contact></Contact>
       </div>
    </ChakraProvider>

     
  )
}

export default App
