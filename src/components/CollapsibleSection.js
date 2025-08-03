// src/components/CollapsibleSection.js
import React, { useState } from 'react';
import '../styles/collapsibleSection.css'; // Crearemos este CSS a continuación

const CollapsibleSection = ({ title, children, isOpen: initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={toggleOpen}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span> {/* Flecha hacia abajo/arriba */}
      </button>
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;