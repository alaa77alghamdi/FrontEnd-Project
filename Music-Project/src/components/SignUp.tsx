import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            alert("Please, enter the correct information.")
        }else if(pass !== passAgain){
            alert("Please, verify the password.")
        }else{
            localStorage.setItem("name" ,name)
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