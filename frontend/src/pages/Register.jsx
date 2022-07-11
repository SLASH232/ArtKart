import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Register.css'
import { publicRequest, userRequest } from '../requestMethod'

function Register() {
  const [fname,setfname]= useState("");
  const [lname,setlname]= useState("");
  const [username,setusername]= useState("");
  const [email,setemail]= useState("");
  const [password,setPassword]= useState("");
  const [cpassword,setCPassword]= useState("");


  const handleSubmit =(e)=>{
    e.preventDefault();
    const postUser=async ()=>{
      try{
        const user={
          username:username,
          email:email,
          password:password
        }
        console.log("user",user);
        const res=await publicRequest.post("/auth/register/",user);

        console.log("success full");
      }catch(err){
        console.log(err)
      }
    }
    postUser();
  }


  return (
    <div className='register'>
        <div className='register__wrapper'>
            <h1> Create An Account</h1>
            <form>
                <input placeholder='first name' onChange={(e)=>setfname(e.target.value)}/>
                <input placeholder='last name' onChange={(e)=>setlname(e.target.value)}/>
                <input placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
                <input placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
                <input placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <input placeholder='confirm password' onChange={(e)=>setCPassword(e.target.value)}/>

                <p className='register__agreement'>By creating an account, I consent to the processing of my personal data
                in accordance with the <b> PRIVACY POLICY</b>
                </p>

                <button onClick={handleSubmit}> CREATE</button>
            </form>
        </div>
    
    </div>
  )
}

export default Register