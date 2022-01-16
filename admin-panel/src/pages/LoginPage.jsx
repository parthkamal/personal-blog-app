import React, { useState } from 'react';
import "../../src/App.css";


function LoginPage(props) {
    //managing the states
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');

    return <>
    <div className="authentication-form">
    <input type="text" name='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} />
    <input type="text" name='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
    <button>LOGIN</button>
    </div>
    
    </>;
}

export default LoginPage;