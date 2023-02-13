import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Routes from './components/Routes'
import Booking from './components/ServicesComp/Booking'

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
