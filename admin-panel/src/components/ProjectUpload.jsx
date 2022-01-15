import React, { useState } from 'react';


function ProjectUpload(props) {
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    const [link,setLink]=useState("");

    const uploadProject =async ()=>{
        //preparing the json object
        const json = JSON.stringify({
            title:title,
            link:link,
            description:description
        })
        const headers={
            'Content-type':'application/json'
        }
        try {
            console.log('try karta hu')
            const res =await axios.post('http://localhost:8080/admin/projects',json,{headers});
            console.log(res);
        } catch (error) {
            console.log("eror de rha mac",error);
        }
    }

    return <>
        <label htmlFor="title">title:</label>
        <input type="text" name='title' placeholder='project title' onChange={(e) => { setTitle(e.target.value) }} />
        <label htmlFor="links">description:</label>
        <input type="text" name='links' placeholder='project description' onChange={(e) => { setDescription(e.target.value) }} />
        <label htmlFor="links">link:</label>
        <input type="text" name='links' placeholder='project link' onChange={(e) => { setLink(e.target.value) }} />
        <button onClick={uploadProject}>upload project</button>
    </>;
}

export default ProjectUpload;