import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
function Contact() {
    const [contacts,setContacts]=useState([]);
    useEffect(()=>{
        const fetchContact = async()=>{
            try {
                const res = await axios.get('http://localhost:8080/admin/contact');
                setContacts(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchContact();
    },[])
    return <>
    <h1>contact page</h1>
    <Link to='/contact/create' >add contact </Link>
    {contacts.map(contact=>{
        return (<div className="contact" key={contact._id}>
            <div className="contact-title">{contact.title}</div>
            <div className="contact-link">{contact.link}</div>
        </div>)

    })}
    </>;
}

export default Contact;
