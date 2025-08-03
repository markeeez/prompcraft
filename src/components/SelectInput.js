// src/components/SelectInput.js
import React from 'react';
import Select from 'react-select';
import '../styles/selectInput.css';
const SelectInput = ({ label, value, onChange, options, id }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <Select
        inputId={id}
        classNamePrefix="custom-select"
        value={options.find(opt => opt.value === value)}
        onChange={(selected) => onChange({ target: { value: selected.value } })}
        options={options}
        placeholder="Selecciona una opción..."
      />
    </div>
  );
};

export default SelectInput;