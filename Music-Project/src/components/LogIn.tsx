import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'

export default function LogIn() {

  const [name, setName]= useState("")
  const [pass, setPass ] = useState<any>()
  const navigate = useNavigate()

  const getInfo = ()=>{
      const nameValue = localStorage.getItem('name');
      if(name === nameValue){   
          navigate("/")
      }else if(name.length <3 || pass.length <3){
        //   alert("Please, enter the correct information.")
        swal.fire({
            icon: 'info',
            text: 'Please, enter the correct information.',
            iconColor: '#221409',
            showCloseButton: true,
            focusConfirm: false,
            background: '#f3f1e8',
            confirmButtonColor: '#221409',
            confirmButtonText: 'OK',
        })
      }else{
        //   alert("Please, create a new account.")
        swal.fire({
            icon: 'info',
            text: "Please, create a new account.",
            iconColor: '#221409',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            background: '#f3f1e8',
            confirmButtonColor: '#221409',
            cancelButtonColor:'#221409',
            confirmButtonText: 'OK',
            cancelButtonText:
              'Cancel',
          }).then((result: { isConfirmed: any; }) => {
            if (result.isConfirmed) {
              navigate('/signUp')
            }})
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