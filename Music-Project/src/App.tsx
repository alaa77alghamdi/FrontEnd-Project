import { useState } from 'react'
import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About&Con/About'
import Profile from './components/About&Con/Profile'
import Contact from './components/About&Con/Contact'


import Footer from './components/Footer'
import Nav from './components/Nav'
import Routes from './components/Routes'


function App() {

  return (

    


      


     
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>

  )
}

export default App
