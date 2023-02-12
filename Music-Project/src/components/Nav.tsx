import { List } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/white-logo.png'

export default function Nav() {
  const navigate = useNavigate()
  const HomePage =()=>{
    navigate("/")    
  }
  const LogIn =()=>{
    navigate("/logIn")    
  }
  const SignUp =()=>{
    navigate("/signUp")    
  }
  return (
    <nav>
      <div className='navBar'>
        <img src={logo} alt="" onClick={HomePage}/>
        <ul>
          <li><Link to='/'>HOME </Link></li>
          <li>|</li>
          <li className='dropdown'> 
            SERVICES ⌵
            <div className='dropdownContent'>
              <Link to='/learningService'>Music Education</Link>
              <Link to='/bookingService'>Book A Musician</Link>
              <Link to='/storeService'>Musical Instruments</Link>
            </div>
          </li>
          <li>|</li>
          <li><Link to='/about'> ABOUT </Link></li>
          <li>|</li>
          <li><Link to='/contact'> CONTACT </Link></li>
        </ul>
      </div>
      <div className='btnNav'>
        <button onClick={LogIn}>Log In</button>
        <button onClick={SignUp}>Sing Up</button>
      </div>
    </nav>
  )
}