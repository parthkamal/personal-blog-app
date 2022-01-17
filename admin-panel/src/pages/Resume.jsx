import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Resume() {
    const [resume, setResume] = useState([]);
    useEffect(() => {
        const fetchResume = async () => {
            try {
                const res = await axios.get('http://localhost:8080/admin/resume');
                console.log(res.data);
                setResume(res.data);
                //here we will set up the default res.data object to the state 
            } catch (error) {
                console.log(error);
            }
        }
        fetchResume();
    }, [])
    const deleteResume = async (id)=>{
        try {
            const headers = {
                'Content-type':'application/json'
            }
            const json= JSON.stringify({id:id});
            const res= await axios.delete('http://localhost:8080/admin/resume',{data:{json}},{headers});
            console.log(res.data);
            alert(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <Navbar />
        <div className="about-group">
            <Link to='/resume/create'>add more resume</Link>
            {resume.map((event) => {
                const description = event.description.split('*');
                const links = event.links.split(' ');
                return (
                    <div className="about" key={event._id}>
                        <div className="edit-group">
                            <button onClick={() => deleteResume(event._id)}>delete</button>
                            <Link to='create' state={{resume:event}} className='edit'>edit</Link>
                        </div>
                        <div className="project-title">{event.title}</div>
                        <ul className="project-description">
                            {description.map((point) => {
                                return (
                                    <li>{point}</li>
                                )
                            })}
                        </ul>
                        <ul className="event-links">
                            {links.map((point, index) => {
                                return (
                                    <a href={point}><li>{`link related to project ${index}`}</li></a>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>

    </>;
}

export default Resume;