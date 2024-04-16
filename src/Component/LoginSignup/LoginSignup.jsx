import React, { useState } from 'react'
import { FaEnvelope } from "react-icons/fa6";

import './LoginSignup.css'

const LoginSignup = () => {

    const [action, setAction] = useState("Login")
    return (
        <body>
        <div className='container'>
   
            <div className='header'>
                <div className='text'> {action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
              {action==="Login"?<div></div>:<div className='input'>
              <img src='' alt='' />
             <input type='text' placeholder='Name' />
               </div>}
                
                <div className='input'>
                <FaEnvelope />
                    <input type='email' name=' your Email' placeholder='Enter Your Email'/>
                </div>
                <div className='input'>
                    <img src='' alt='' />
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forget-password'> forgot password <span>Click Here</span></div>}
            
            <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>              

        </div>
        </body>
    )
}

export default LoginSignup