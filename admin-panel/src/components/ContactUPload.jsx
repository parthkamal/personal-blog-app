import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ContactUpload(props) {
    const [title,setTitle]= useState("");
    const [link,setLink]=useState("");

    const uploadContact =async ()=>{
        //preparing the json object
        const json = JSON.stringify({
            title:title,
            link:link
        })
        const headers={
            'Content-type':'application/json'
        }
        try {
            console.log('try karta hu')
            const res =await axios.post('http://localhost:8080/admin/contact',json,{headers});
            console.log(res);
        } catch (error) {
            console.log("eror de rha mac",error);
        }
    }
    return (
        <React.Fragment>
            <div className="authentication-form">
            <input type="text"  name='title' placeholder='contact title' onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" name='links' placeholder='contact link' onChange={(e)=>{setLink(e.target.value)}} />
            <button  onClick={uploadContact}>upload contact</button>
            </div>
            
        </React.Fragment>
    );
}

export default ContactUpload;

