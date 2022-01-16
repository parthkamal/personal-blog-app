import React, { useState } from 'react';
import axios from 'axios';


function ResumeUpload(props) {
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    const [links,setLink]=useState("");

    const uploadresume =async ()=>{
        //preparing the json object
        const json = JSON.stringify({
            title:title,
            links:links,
            description:description
        })
        const headers={
            'Content-type':'application/json'
        }
        try {
            console.log('try karta hu')
            const res =await axios.post('http://localhost:8080/admin/resume',json,{headers});
            console.log(res);
        } catch (error) {
            console.log("eror de rha mac",error);
        }
    }

    return <>
    <div className="authentication-form">
        <input type="text" name='title' placeholder='resume title' onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" name='links' placeholder='resume description' onChange={(e) => { setDescription(e.target.value) }} />
        <input type="text" name='links' placeholder='resume link' onChange={(e) => { setLink(e.target.value) }} />
        <button onClick={uploadresume}>upload resume</button>
    </div>
       
    </>;
}

export default ResumeUpload;