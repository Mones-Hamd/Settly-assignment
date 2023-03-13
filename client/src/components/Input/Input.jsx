import React from 'react';
import './input.css';
const Input = ({ type, name, value, placeholder }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className="input"
      />
    </>
  );
};

export default Input;
