import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {

  const [name, setName]= useState("")
  const [pass, setPass ] = useState<any>()
  const navigate = useNavigate()

  const getInfo = ()=>{
      const nameValue = localStorage.getItem('name');
      if(name === nameValue){   
          navigate("/")
      }else if(name.length <3 || pass.length <3){
          alert("Please, enter the correct information.")
      }else{
          alert("Please, create a new account.")
          navigate("/signUp")
      }
  }
  const SignUp =()=>{
      navigate("/signUp")    
  }

  return (
      <div className='mainlogIn'>
          <div className='logIn-form'>
              <fieldset className='logIn-fieldset'>  
                  LOG IN 
                  <input placeholder='User Name' onChange={e =>{setName(e.target.value)}} ></input>
                  <input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
                  <button type='submit' onClick={getInfo}>Log In</button>
                  <a href="" onClick={SignUp}>* create a new account?</a>
              </fieldset> 
          </div>

      </div>   
  )
}