import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';
import Navbar from '../components/Navbar';


function Posts(props) {
    const [posts, setPosts] = new useState([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('http://localhost:8080/admin/posts');
                console.log(res.data);
                setPosts(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getPosts();
    }, [])
    return <>
        <Navbar />
        <div className="about-group">
            <h1>post  section</h1>
            <Link to='/posts/create' >add post</Link>
            {posts.map((post) => {
                //convert the image buffer to base64
                const img = new Buffer.from(post.image.data).toString('base64');
                const links = post.links.split(' ');
                return (
                    <div className="about" key={post._id}>
                        <Link to='create' state={{post:post}} className='edit'>edit</Link>
                        <img src={`data:image/png;base64,${img}`} alt="" />
                        <div className="about-title">{post.title}</div>
                        <div className="about-description">{post.description}</div>
                        <ul className="event-links">
                            {links.map((point,index) => {
                                return (
                                    <a href={point}><li>{`links to the post${index}`}</li></a>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </>;
}

export default Posts;