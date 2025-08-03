// src/components/RangeInput.js
import React from 'react';
import '../styles/rangeInput.css'; // Crearemos este CSS a continuación

const RangeInput = ({ label, value, onChange, min, max, step, id }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        {label}: <span>{value}</span>
      </label>
      <input
        type="range"
        id={id}
        className="range-input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RangeInput;