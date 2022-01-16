import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/App.css";



function PostUpload(props) {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [links, setLinks] = useState("");

    const uploadFile = async (e) => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('links', links);
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.forEach(pair => {
            console.log(pair)
        });
        try {
            const res = await axios.post(
                'http://localhost:8080/admin/posts',
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
        <div className="authentication-form">
            <h1>Create Post</h1>
            <input type="text" name='title' placeholder='Post title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" name='description' placeholder='Post description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <input type="text" name='links' placeholder='Post links' value={links} onChange={(e) => { setLinks(e.target.value) }} />
            <input type="file" onChange={saveFile} />
            <button onClick={uploadFile} >Upload</button>
        </div>

    </React.Fragment>);
}

export default PostUpload;