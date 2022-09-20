import React from 'react';
import { Link } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';
import userImg from '../images/userimg.png';

const ContactCard = (props) => {
    const {removeContactHandler} = useContactsCrud();

    const deleteContact = (id) => {
        removeContactHandler(id);
    }
    const {id, name, email} = props.contacts;
    return (
        <div className='item'>
            <img className='ui avatar image' src={userImg} alt='user' />
        <div className='content'>
            <Link to={{pathname: `/contact/${id}`, state:{contacts: props.contacts}}} >
            <div className='header'>{name}</div>
            <div>{email}</div>
            </Link>
        </div>
        <i 
        className='trash alternate outline icon' 
        style={{color:"red", marginTop: "7px", marginLeft: "10px"}}
        onClick={(e) => window.confirm('Are you sure?') ? deleteContact(id) : e.preventDefault}></i>
        <Link 
        to={`/contacts/${id}`} 
        state= { {contact: props.contacts} }>
        <i 
        className='edit alternate outline icon' 
        style={{color:"blue", marginTop: "7px"}}
        ></i></Link>
    </div>
    );
};

export default ContactCard;