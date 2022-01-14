import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AboutUpload(props) {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const uploadFile = async (e) => {
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.forEach(pair => {
            console.log(pair)
        });
        try {
            const res = await axios.post(
                'http://localhost:8080/admin/about',
                formData,
                {
                    headers: { 'content-type': 'multipart/form-data' }
                }
            );
            console.log('res,', res.data);
        } catch (err) {
            console.log(err);
        }
    }
    const saveFile = (e) => {
        console.log('saveFile');
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    return (<React.Fragment>
        <h1>fshkfhak</h1>
        <label htmlFor="title">label:</label>
        <input type="text" name='title' placeholder='about title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <label htmlFor="description">:description</label>
        <input type="text" name='description' placeholder='about description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
        <input type="file" onChange={saveFile} />
        <button onClick={uploadFile} >Upload</button>
    </React.Fragment>);
}

export default AboutUpload;