import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "../../src/App.css";
import { fetchUser } from '../services/auth';


function LoginPage(props) {
    //managing the states
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const navigate = useNavigate();
    
    const handleLogin = async()=>{
        const obj = {
            email:Email,
            password:Password
        }
        //grabing the object from the client sidef
        // console.log(JSON.stringify(obj));
        const json = JSON.stringify(obj);
        const headers={
            'content-type':'application/json'
        }
        try {
            const res = await axios.post('http://localhost:8080/admin/login',json,{headers});
            if(res){
                // console.log(res.data);
                const {token}= res.data;
                // console.log(token);
                //we have got the token
                // we will check if the token is present in the local storage then it will erase it and replace it with the new
                if(localStorage.getItem('token')){
                    localStorage.removeItem('token');
                    localStorage.setItem('token',token);
                }else{
                    localStorage.setItem('token',token);
                }
                if(token){
                    const user = await fetchUser(token).then(user=>user).catch(error=>{
                        console.log(error);
                    });
                    console.log(user);
                    if(user){
                        // console.log(navigate);
                        navigate('/',{user:user});
                    }else{
                        alert('you are not an admin')
                    }
                }else{
                    console.log('bakchodi mat karo');
                }
                console.log('localstorage me store kar diya hu check kro')
                // console.log(res);
                
            }  
        } catch (error) {
            console.log(error)
        }
    }
    return <>
    <div className="authentication-form">
    <input type="email" name='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} />
    <input type="password" name='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={handleLogin}>LOGIN</button>
    </div>
    
    </>;
}

export default LoginPage;