import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';
import "../../src/App.css";
import Navbar from '../components/Navbar';

function About() {
    //setting the states of about
    const [abouts, setabouts] = useState([]);
    //usefffect hook for fetching the about post
    useEffect(() => {
        console.log("useeffect")
        const getAbout = async () => {
            try {
                const res = await axios.get('http://localhost:8080/admin/about');
                console.log('getabout usefeefeft ')
                setabouts(res.data);
                console.log(res.data);
                // alert(res.data.message);
            } catch (error) {
                console.log('error aa gya bhaiya', error, "tandoori");
            }
        }
        getAbout();
    }, []);

    const deleteAbout = async (id)=>{
        try{
            const headers = {
                'Content-type':'application/json'
            }
            const json = JSON.stringify({id:id});
            const res = await axios.delete('http://localhost:8080/admin/about',{data:{json}},{headers});
            console.log(res.data);
            alert(res.data.message);
        }catch(error){
            console.log(error);
        }
    }
    return <>
        <Navbar />
        <div className="about-group">
            <h1>about section</h1>
            <Link to='/about/create'>create about</Link>
            {abouts.map((about) => {
                //convert the image buffer to base64
                const img = new Buffer.from(about.image.data).toString('base64');
                return (
                    <div className="about" key={about._id}>
                        <div className="edit-group">
                            <button onClick={()=>deleteAbout(about._id)}>delete</button>
                            <Link to='create' state={{ about: about }} className='edit'>edit</Link>
                        </div>
                        <img src={`data:image/png;base64,${img}`} alt="" />
                        <div className="about-title">{about.title}</div>
                        <div className="about-description">{about.description}</div>
                    </div>
                )
            })}
        </div></>;
}

export default About;