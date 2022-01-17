import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/App.css";
import {useLocation} from 'react-router-dom';

function AboutUpload() {
    const location = useLocation();
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState('');
    const [componentState, setComponentState] = useState(false);
    const [buttonTitle, setButtonTitle] = useState('Create');

    useEffect(() => {
        // console.log('data has reached',post)
        const editCreateHandler = (about) => {
            if (about !== undefined) {
                // console.log('data phuch gaya hai main render krne ja rha');
                //here we will render the topics in the form
                console.log(about)
                setTitle(about.title);
                setDescription(about.description);
                setButtonTitle('Edit');
                setComponentState(true);
                setId(about._id);
            } else {
                console.log('data nhi phucha mtlb admin create kr rha hai')
            }
        }
        if (location.state != null) {
            const { about } = location.state;
            editCreateHandler(about);
        } else {
            editCreateHandler(undefined);
        }

    }, []);

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

    const editFile = async(e)=>{
        console.log('post will be edited here');
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append("file", file);
        formData.append('id',id);
        formData.append("fileName", fileName);

        const headers = {
            'content-type':'multipart/form-data'
        }
        try {
            const res = await axios.put('http://localhost:8080/admin/about',formData,{headers});
            console.log(res.data);
            alert(res.data.message);
        } catch (err) {
            
        }
    }

    const manageFile =async ()=>{
        if(componentState){
            editFile();
        }else{
            uploadFile();
        }
    }
    return (<React.Fragment>
        <div className="authentication-form">
        <h1>Create About</h1>
        <input type="text" name='title' placeholder='about title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" name='description' placeholder='about description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
        <input type="file" onChange={saveFile} />
        <button onClick={manageFile} >{buttonTitle}</button>
        </div>
        
    </React.Fragment>);
}

export default AboutUpload;