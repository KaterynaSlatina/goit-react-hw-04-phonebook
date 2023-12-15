import React, { useState, useEffect } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

import './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
      setName('');
      setNumber('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <section>
        <h2>Phonebook</h2>
        <FormContact
          name={name}
          number={number}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <h2>Contacts list</h2>
        <ContactList contacts={findContacts} deleteContact={deleteContact} />
        <Filter changeFilter={changeFilter} filter={filter} />
      </section>
    </>
  );
};
//
