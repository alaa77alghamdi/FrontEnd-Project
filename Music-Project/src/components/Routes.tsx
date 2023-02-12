import React from 'react'
import { Routes as Routes_, Route } from 'react-router-dom'
import About from './About&Con/About'
import Contact from './About&Con/Contact'
import LearningService from './ServicesComp/Learning'
import BookingService from './ServicesComp/Booking'
import StoreService from './ServicesComp/Store'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Profile from './About&Con/Profile'

import Home from './Home'

export default function Routes() {
  return (
    <div>
        <Routes_>
            <Route path='/' element={<Home />}></Route>
            <Route path='/musicEducation' element={<LearningService />} />
            <Route path='/bookMusician' element={<BookingService />} />
            <Route path='/musicalInstruments' element={<StoreService />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='logIn' element={<LogIn />}></Route>
            <Route path='signUp' element={<SignUp />}></Route>
        </Routes_>
    </div>
  )
}
