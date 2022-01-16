import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function ProjectUpload(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const uploadProject = async () => {
        //preparing the json object
        const json = JSON.stringify({
            title: title,
            link: link,
            description: description
        })
        const headers = {
            'Content-type': 'application/json'
        }
        try {
            console.log('try karta hu')
            const res = await axios.post('http://localhost:8080/admin/projects', json, { headers });
            // console.log(res);
            if(res) alert(res.data.message)
        } catch (error) {
            console.log("eror de rha mac", error);
        }
    }

    return <>
    <Navbar/>
        <div className="authentication-form">
            <input type="text" name='title' placeholder='project title' onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" name='links' placeholder='project description' onChange={(e) => { setDescription(e.target.value) }} />
            <input type="text" name='links' placeholder='project link' onChange={(e) => { setLink(e.target.value) }} />
            <button onClick={uploadProject}>upload project</button>
        </div>

    </>;
}

export default ProjectUpload;