import React, { useState, useEffect } from 'react';
import '../styles/cookiesPopup.css';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted !== 'true' && cookiesAccepted !== 'false') {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowPopup(false);
    // Aquí carga scripts de analytics o AdSense
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowPopup(false);
    // Aquí evita cargar scripts externos
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="cookie-popup-title">
      <div className="cookie-popup">
        <h3 id="cookie-popup-title">🍪 Usamos cookies</h3>
        <p>
          Utilizamos cookies esenciales y de terceros para mejorar tu experiencia. Puedes gestionarlas en cualquier momento desde nuestra{' '}
          <a href="/cookies" target="_blank" rel="noopener noreferrer">Política de Cookies</a>.
        </p>
        <div className="cookie-buttons">
          <button className="cookie-accept" onClick={handleAccept}>Aceptar</button>
          <button className="cookie-reject" onClick={handleReject}>Rechazar</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
