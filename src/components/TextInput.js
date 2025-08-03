// src/components/TextInput.js
import React from 'react';
import '../styles/textInput.css'; // Crearemos este CSS a continuación

const TextInput = ({ label, value, onChange, placeholder, id, type = 'text' }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        className="text-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;