import React from 'react';
import './input.css';
const Input = ({ type, name, placeholder, handleChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="input-app"
        required
      />
    </>
  );
};

export default Input;
