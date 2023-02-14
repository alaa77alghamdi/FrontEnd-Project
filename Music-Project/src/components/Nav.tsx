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
  const Profile =()=>{
    navigate("/profile")    
  }
  const SingOut =()=>{
    if(confirm('Are you sure to logout?')) {
      localStorage.removeItem('name');
      navigate("/")
    }
    navigate("/")
  }
  return (
    <nav>
      <div className='mainNav'>
        <div className='navBar'>
          <img src={logo} alt="" onClick={HomePage}/>
          <ul>
            <li><Link to='/'>HOME </Link></li>
            <li>|</li>
            <li className='dropdown'> 
              SERVICES ⌵
              <div className='dropdownContent'>
                <Link to='/musicEducation'>Music Education</Link>
                <Link to='/bookMusician'>Book A Musician</Link>
                <Link to='/musicalInstruments'>Musical Instruments</Link>
              </div>
            </li>
            <li>|</li>
            <li><Link to='/about'> ABOUT </Link></li>
            <li>|</li>
            <li><Link to='/contact'> CONTACT </Link></li>
          </ul>
        </div>

        <>{(
            localStorage.getItem('name') == null ?
              <div className='btnNav'>
                <button onClick={LogIn}>Log In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
              :
              <div className='btnNav'>
                <a onClick={Profile}>
                  <p>Hello, {localStorage.getItem('name')}</p>
                </a>
                <button onClick={SingOut}>Sign Out</button>
              </div>
          )}</>
        
      </div>
    </nav>
  )
}