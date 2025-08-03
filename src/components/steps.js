import React from 'react';
import '../styles/steps.css';

const ComoEmpezar = () => {
  const pasos = [
    {
      numero: "01",
      titulo: "Ajusta tu prompt con los controles",
      descripcion: "Selecciona elementos como el tipo de imagen, estilo artístico, colores, enfoque, nivel de detalle, y mucho más.",
      icono: "🎛️" // Icono de controles
    },
    {
      numero: "02",
      titulo: "Elige el modelo de IA de tu preferencia",
      descripcion: "Puedes copiar el prompt generado y usarlo en Midjourney, DALL·E o cualquier otra IA compatible.",
      icono: "🤖" // Icono de IA
    },
    {
      numero: "03",
      titulo: "Genera tu imagen con un clic",
      descripcion: "¡Listo! Solo tienes que enviar tu prompt al modelo de IA y disfrutar del resultado visual que has creado.",
      icono: "✨" // Icono de magia
    }
  ];

  return (
    <section className="como-empezar" id="guia">
      <div className="como-empezar-container">
        <h2 className="como-empezar-titulo">Cómo empezar: guía rápida paso a paso</h2>
        
        <div className="pasos-container">
          {pasos.map((paso, index) => (
            <div className="paso-card" key={index}>
              <div className="paso-header">
                <span className="paso-numero">{paso.numero}</span>
                <span className="paso-icono">{paso.icono}</span>
              </div>
              <h3 className="paso-titulo">{paso.titulo}</h3>
              <p className="paso-descripcion">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoEmpezar;