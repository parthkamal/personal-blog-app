import React, { useState } from 'react';
import "../../src/App.css";


function RegisterPage(props) {
    //managing the states
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');

    return <>
    <div className="authentication-form">
    <input type="text" name='firstname' placeholder='first name' onChange={(e)=>{set=FirstName(e.target.value)}} />
    <input type="text" name='lastname' placeholder='last name' onChange={(e)=>{setLastName(e.target.value)}} />
    <input type="text" name='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} />
    <input type="text" name='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
    <button>REGISTER</button>
    </div>
    
    </>;
}

export default RegisterPage;