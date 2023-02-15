import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2'

export default function SignUp() {

    const [name, setName]= useState("")
    const [email, setEmail] = useState<any>()
    const [pass, setPass] = useState<any>()
    const [passAgain, setPassAgain ] = useState<any>()
    const navigate = useNavigate()
    const LogIn =()=>{
        navigate("/logIn")    
    }

    const getInfo = ()=>{
        if(name.length <3 || pass.length <3){
            // alert("Please, enter the correct information.")
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
        }else if(pass !== passAgain){
            // alert("Please, verify the password.")
            swal.fire({
                icon: 'info',
                text: 'Please, verify the password.',
                iconColor: '#221409',
                showCloseButton: true,
                focusConfirm: false,
                background: '#f3f1e8',
                confirmButtonColor: '#221409',
                confirmButtonText: 'OK',
            })
        }else{
            localStorage.setItem("name" ,name)
            localStorage.setItem("email" ,email)
            navigate("/")
        }
    }

    return (
        <div className='mainlogIn'>
            <div className='logIn-form'>
                <fieldset className='logIn-fieldset'>  
                    SIGN UP 
                    <input placeholder='User Name' onChange={e =>{setName(e.target.value)}} ></input>
                    <input placeholder='Email' onChange={e =>{setEmail(e.target.value)}} ></input>
                    <input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
                    <input placeholder='Repeat Password' type='password' onChange={e =>{setPassAgain(e.target.value)}}></input>
                    <button type='submit' onClick={getInfo}>Sign Up</button>
                   <a href="" onClick={LogIn}> * Already a user? LOGIN</a>
                </fieldset> 
            </div>

        </div>   
    )
}