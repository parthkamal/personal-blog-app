import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../src/App.css";


function RegisterPage(props) {
    //managing the states
    const [FirstName,setFirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');

    const handleRegister = async()=>{
        const obj = {
            first_name:FirstName,
            last_name:LastName,
            email:Email,
            password:Password   
        }
        //grabing the object from the client side
        const json = JSON.stringify(obj);
        const headers = {
            'content-type':'application/json',
        }
        try {
            const res = await axios.post('http://localhost:8080/admin/register',json,{headers})
            if(res){
                console.log(res.data);
            }
        }catch(error){
            console.log(error.message);
        }
    }

    return <>
    <div className="authentication-form">
    <input type="text" name='firstname' placeholder='first name' onChange={(e)=>{setFirstName(e.target.value)}} />
    <input type="text" name='lastname' placeholder='last name' onChange={(e)=>{setLastName(e.target.value)}} />
    <input type="email" name='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} />
    <input type="password" name='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={handleRegister}>REGISTER</button>
    </div>
    
    </>;
}

export default RegisterPage;