import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

const EditContact = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, name, email } = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const {updateContactHandler} = useContactsCrud();

    const params = useParams()
    
    function getDetails() {
        fetch("http://localhost:3006/contacts/" + params.id)
        .then(response => response.json())
        .then(response => 
            {
                setNewName(response.name)
                setNewEmail(response.email)
            })
    }

    useEffect(() => {
        getDetails()
    }, [])    

    const update = (e) => {
        e.preventDefault();
        if (newName === "" || newEmail === "") {
            alert("All fields are mandatory")
            return;
        }
        updateContactHandler({id, name:newName, email:newEmail});
        setNewName("");
        setNewEmail("");
        navigate("/");
    };

        return (
            <div className='ui main'>
                <h2>Edit Contact</h2>
                <form className='ui form' onSubmit={update}>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                        type='text' 
                        name='name' 
                        placeholder='Name' 
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input 
                        type='text' 
                        name='email' 
                        placeholder='Email'
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)} />
                    </div>
                    <button className='ui button blue'>Update</button>
                </form>
            </div>
        );
    };

export default EditContact;