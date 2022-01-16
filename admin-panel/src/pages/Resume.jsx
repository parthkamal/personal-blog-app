import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
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
    return <>
        <div className="project-group">
            <Link to='/resume/create'>add more resume</Link>
            {resume.map((event) => {
                const description = event.description.split('*');
                const links = event.links.split(' ');
                return (
                    <div className="" key={event._id}>
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

export default Projects;