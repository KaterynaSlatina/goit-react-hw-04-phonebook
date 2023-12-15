import React from 'react';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import css from './FormContact.module.css';

export const FormContact = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
