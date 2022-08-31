import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import NoPage from './NoPage';
import api from '../api/contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ContactsCrudContextProvider } from '../context/ContactsCrudContext';

function App() {
  return (
    <div className='ui container'>

      <Router>
      <Header />
      <ContactsCrudContextProvider>
        <Routes>
          <Route index element={<ContactList />} />
          <Route exact path="/add" element={<AddContact />} />
          <Route exact path="/edit" element={<EditContact />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route exact path="*" element={<NoPage />} />
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
};

export default App;
