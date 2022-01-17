import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function ResumeUpload(props) {
    const location = useLocation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [links, setLinks] = useState("");
    const [componentState, setComponentState] = useState(false);
    const [buttonTitle, setButtonTitle] = useState('Create');
    const [id, setId] = useState('');


    useEffect(() => {
        const editCreateHandler = (resume) => {
            if (resume !== undefined) {
                console.log(resume)
                setTitle(resume.title);
                setDescription(resume.description);
                setLinks(resume.links);
                setButtonTitle('Edit');
                setComponentState(true);
                setId(resume._id);
            } else {
                console.log('data nhi phucha mtlb admin create kr rha hai')
            }
        }
        if (location.state != null) {
            const { resume } = location.state;
            editCreateHandler(resume);
        } else {
            editCreateHandler(undefined);
        }
    }, []);

    const uploadresume = async () => {
        //preparing the json object
        const json = JSON.stringify({
            title: title,
            links: links,
            description: description
        })
        const headers = {
            'Content-type': 'application/json'
        }
        try {
            console.log('try karta hu')
            const res = await axios.post('http://localhost:8080/admin/resume', json, { headers });
            console.log(res);
        } catch (error) {
            console.log("eror de rha mac", error);
        }
    }


    const editResume = async () => {
        const obj = {
            title, description, links,_id:id,
        }
        const json = JSON.stringify(obj);
        const headers = {
            'Content-type': 'application/json'
        }
        try {
            const res = await axios.put('http://localhost:8080/admin/resume', json, { headers });
            console.log(res.data.message);
            alert(res.data.message);
        } catch (error) {
            console.log('error', error);
        }
    }

    const manageResume = async () => {
        if (componentState) {
            editResume();
        } else {
            uploadresume();
        }
    }

    return <>
        <div className="authentication-form">
            <h1>{`${buttonTitle} Resume`}</h1>
            <input type="text" name='title' placeholder='resume title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" name='description' placeholder='resume description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <input type="text" name='links' placeholder='resume link' value={links} onChange={(e) => { setLinks(e.target.value) }} />
            <button onClick={manageResume}>{buttonTitle}</button>
        </div>

    </>;
}

export default ResumeUpload;