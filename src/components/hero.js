import React from 'react';
import '../styles/hero.css';
import { Link } from "react-router-dom"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Domina el arte de los prompts con IA</h1>
          <p className="subtitle">
            La plataforma intuitiva que transforma tus ideas en prompts 
            profesionales para generación de imágenes.
          </p>
          <div className="cta-container">
            <Link to="/generador" className="home-button">
              Comenzar
            </Link>
            <Link to="/ejemplos" className="secondary-button">
              Ver Ejemplos
            </Link>
          </div>
        </div>
        <div className="hero-image">
         <img src="/assets/inicio.gif" alt="Demostración visual del generador de prompts" className="hero-gif"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;