import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Columna 1: Logo y descripción */}
        <div className="footer-logo">
          <h3>PromptCraft</h3>
          <p>Donde la creatividad se encuentra con la ingeniería de prompts</p>
        </div>

        {/* Columnas 2–4: Navegación y legales */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Navegación</h4>
            <Link to="/">Características</Link>
            <Link to="/ejemplos">Ejemplos</Link>
          </div>

          <div className="link-group">
            <h4>Legal</h4>
            <Link to="/avisoLegal">Aviso legal</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/privacidad">Política de privacidad</Link>
          </div>

          <div className="link-group">
            <h4>Contacto</h4>
            <a href="mailto:hola@promptcraft.com">hola@promptcraft.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PromptCraft. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


