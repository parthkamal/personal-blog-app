import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:8080/admin/projects');
                console.log(res.data);
                setProjects(res.data);
                //here we will set up the default res.data object to the state 
            } catch (error) {
                console.log(error);
            }
        }
        fetchProjects()
    }, [])
    return <>
        <div className="project-group">
            <Link to='/projects/create'>add more projects</Link>
            {projects.map((project) => {
                const description = project.description.split('*');
                return (
                    <div className="project" key={project._id}>
                        <div className="project-title">{project.title}</div>
                        <ul className="project-description">
                            {description.map((point) => {
                                return (
                                    <li>{point}</li>
                                )
                            })}
                        </ul>
                        <a href={project.link}>link to the project</a>
                    </div>
                )
            })}
        </div>

    </>;
}

export default Projects;