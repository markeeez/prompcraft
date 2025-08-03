import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops... Página no encontrada.</p>
      <Link to="/" className="notfound-button">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
