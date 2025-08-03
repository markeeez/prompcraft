import React from 'react';
import '../styles/features.css';

const Features = () => {
  const features = [
    {
      icon: '⚙️',
      title: 'Ajustes Intuitivos',
      description: 'Controles simples que generan prompts complejos automáticamente.'
    },
    {
      icon: '🎨',
      title: 'Estilos Predefinidos',
      description: 'Elige entre múltiples estilos artísticos con un solo clic.'
    },
    {
      icon: '✨',  // Cambié el icono a algo más representativo
      title: 'Prompts Detallados',
      description: 'Genera prompts completos con todos los detalles que necesites para tus imágenes.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2>Potencia tu creatividad con IA</h2>
        <p className="features-subtitle">
          Diseñado para que cualquiera pueda crear prompts profesionales
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;