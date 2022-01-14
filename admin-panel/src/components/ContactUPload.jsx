import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ContactUpload(props) {
    const [title,setTitle]= useState("");
    const [link,setLink]=useState("");

    const uploadContact =async ()=>{
        const formData = new FormData();
        formData.append('title',title);
        formData.append('link',link);
        formData.forEach(pair => {
            console.log(pair);
        });
        try {
            console.log('try karta hu')
            const res =await axios.post('http://localhost:8080/admin/contact',formData,{
                headers: { 'content-type': 'application/json' }
            });
            console.log(res);
        } catch (error) {
            console.log("eror de rha mac",error);
        }
    }
    return (
        <React.Fragment>
            <label htmlFor="title">title:</label>
            <input type="text"  name='title' placeholder='contact title' onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor="links">links:</label>
            <input type="text" name='links' placeholder='contact link' onChange={(e)=>{setLink(e.target.value)}} />
            <button  onClick={uploadContact}>upload contact</button>
        </React.Fragment>
    );
}

export default ContactUpload;

