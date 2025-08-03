import React from 'react';
import '../styles/loadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-dots">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;

