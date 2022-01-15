import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    const [resume,setResume]= useState([]);
    useEffect(()=>{
        const fetchResume = async()=>{
            try{
                const res = await axios.get('http://localhost:8080/admin/resume');
                console.log(res.data);
                setResume(res.data);
                //here we will set up the default res.data object to the state 
            }catch(error){
                console.log(error);
            }
        }
        fetchResume();
    },[])
    return  <>
    <Link to='/resume/create'>add more resume</Link>
    {resume.map((event)=>{
        const description = event.description.split('*');
        const links =event.links.split(' ');
        return (
            <div className="event" key={event._id}>
                <div className="event-title">{event.title}</div>
                <ul className="event-description">
                    {description.map((point)=>{
                        return (
                            <li>{point}</li>
                        )
                    })}
                </ul>
                <ul className="event-links">
                    {links.map((point,index)=>{
                        return (
                            <a href={point}><li>{`link related to project ${index}`}</li></a>
                        )
                    })}
                </ul>
            </div>
        )
    })}
    </> ;
}

export default Projects;