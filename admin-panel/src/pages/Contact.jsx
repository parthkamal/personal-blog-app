import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
function Contact() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await axios.get('http://localhost:8080/admin/contact');
                setContacts(res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchContact();
    }, [])
    return <>
    <Navbar/>
        <div className="contact-group">
            <h1>contact page</h1>
            <Link to='/contact/create' >add contact </Link>
            {contacts.map(contact => {
                return (<div className="contact" key={contact._id}>
                        <Link to='/about/create' className='edit'>edit</Link>
                    <a href={contact.link}>{contact.title}</a>
                </div>)

            })}
        </div>

    </>;
}

export default Contact;
