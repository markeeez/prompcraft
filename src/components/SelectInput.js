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
        menuPlacement="auto"
        menuPortalTarget={document.body}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: '#274c4e',
            borderColor: state.isFocused ? 'var(--c-green)' : '#ccc',
            boxShadow: state.isFocused ? '0 0 0 2px var(--s-green)' : 'none',
            color: '#eafbf8',
            borderRadius: '8px',
            padding: '2px',
          }),
          singleValue: base => ({
            ...base,
            color: '#eafbf8',
          }),
          input: base => ({
            ...base,
            color: '#eafbf8',
          }),
          placeholder: base => ({
            ...base,
            color: '#a8d6d0',
          }),
          menu: base => ({
            ...base,
            backgroundColor: '#1f3c3f',
            zIndex: 9999,
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
          }),
          option: (base, state) => ({
            ...base,
            color: state.isSelected || state.isFocused ? 'white' : '#eafbf8',
            backgroundColor: state.isSelected
              ? 'var(--c-green)'
              : state.isFocused
              ? 'var(--c-green-hover)'
              : 'transparent',
            cursor: 'pointer',
          }),
          dropdownIndicator: base => ({
            ...base,
            color: '#eafbf8',
          }),
          indicatorSeparator: base => ({
            ...base,
            backgroundColor: '#eafbf8',
          }),
        }}
      />
    </div>
  );
};

export default SelectInput;