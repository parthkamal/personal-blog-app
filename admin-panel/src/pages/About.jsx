import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import {Buffer} from 'buffer';

function About() {
    //setting the states of about
    const [abouts,setabouts]=useState([]);
    //usefffect hook for fetching the about post
    useEffect(()=>{
        console.log("useeffect")
        const getAbout =async ()=>{
            try {
                const res = await axios.get('http://localhost:8080/admin/about');
                console.log('getabout usefeefeft ')
                setabouts(res.data);
                console.log(res.data);
            } catch (error) {
                console.log('error aa gya bhaiya',error,"tandoori");   
            }
        }
        getAbout();
    },[]);
    return <><div className="about-group">
        <h1>about section</h1>
        <Link to='/about/create' >add about post</Link>
        {abouts.map((post)=>{
            //convert the image buffer to base64
            const img = new Buffer.from(post.image.data).toString('base64');
            return (
                <div className="post">
                    <img src={`data:image/png;base64,${img}`} style={{width:70,height:50}} alt="" />
                    <div className="title">{post.title}</div>
                    <div className="description">{post.description}</div>
                </div>
            )
        })}
        </div></>;
}

export default About;