import React from 'react';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import css from './FormContact.module.css';

export const FormContact = ({ name, number, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          required
        />
      </label>

      <button className={css.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
};

// /
