import { useState } from 'react'
import './App.css'
import ConfirmPage from './components/CompForm/ConfirmPage'
import FormBooking from './components/CompForm/FormBooking'
import FormLearing from './components/CompForm/FormLearing'
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
