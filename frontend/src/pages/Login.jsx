import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../redux/apiCalls';
import './Login.css'
function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const {isFetching,error}=useSelector((state)=>state.user);

  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password});
  };
  return (
    <div className='login'>
    <div className='login__wrapper'>
            <h1> SIGN IN</h1>
            <form>
                <input placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <input placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>

            
                <button onClick={handleClick} disabled={isFetching}> Login</button>
                {error && <span className='login__error'> Something went wrong...</span>}
                <a> FORGOT PASSWORD </a>
                <a> CREATE A NEW ACCOUNT</a>
            </form>
        </div>
    
    </div>
  )
}

export default Login