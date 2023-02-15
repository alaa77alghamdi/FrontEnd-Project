import { List } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/white-logo.png'
import swal from 'sweetalert2'


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
    // if(confirm('Are you sure to logout?')) {
    //   localStorage.removeItem('name');
    //   navigate("/")
    // }
    // navigate("/")
    swal.fire({
      icon: 'question',
      text: 'Are you sure to logout?',
      iconColor: '#221409',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      background: '#f3f1e8',
      confirmButtonColor: '#221409',
      cancelButtonColor:'#221409',
      // confirmButtonText: '<a href="/">OK</a>',
      confirmButtonText: 'OK',
      cancelButtonText:
      'Cancel',
  }).then((result: { isConfirmed: any; }) => {
    if (result.isConfirmed) {
      localStorage.removeItem("name")
      navigate("/");
    }
  })
  }
  
  return (
    <nav>
      <div className='mainNav'>
        <div className='navBar'>

          <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>

          <img src={logo} alt="" onClick={HomePage}/>
          <ul className="menu">
            <li><Link to='/'>HOME </Link></li>
            <li className='dropdown'> 
              SERVICES ⌵
              <div className='dropdownContent'>
                <Link to='/musicEducation'>Music Education</Link>
                <Link to='/bookMusician'>Book A Musician</Link>
                <Link to='/musicalInstruments'>Musical Instruments</Link>
              </div>
            </li>
            <li><Link to='/about'> ABOUT </Link></li>
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