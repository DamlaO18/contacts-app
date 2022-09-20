import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import userImg from '../images/userimg.png';

const ContactDetail = () => {
    const [contact, setContact] = useState(null)

    const params = useParams();

    function getDetails() {
        fetch("http://localhost:3006/contacts/" + params.id)
        .then(response => response.json())
        .then(response => setContact(response))
    }

    useEffect(() => {
        getDetails();
    },[])


    // const { name, email } = props.contacts || {};
    return (
        <div className="main">
            
            <div className="ui card centered">
                <div className="image">
                    <img src={userImg} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{contact ? contact.name : null}</div>
                    <div className="description">{contact ? contact.email : null}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back to Contact List</button></Link>
            </div>        
        </div>


    );
};

export default ContactDetail;