import React from 'react';
import '../styles/faq.css';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Necesito experiencia previa para usar la herramienta?",
      answer: "No. La app está diseñada para todos los niveles, desde principiantes hasta expertos."
    },
    {
      question: "¿Puedo usar cualquier modelo de IA?",
      answer: "Sí. Puedes copiar el prompt generado y usarlo con modelos como Midjourney, DALL·E, Stable Diffusion, entre otros."
    },
    {
      question: "¿Qué tipo de imágenes puedo generar?",
      answer: "Puedes crear paisajes, retratos, escenas futuristas, arte abstracto, estilo anime y mucho más."
    },
    {
      question: "¿Tiene costo el uso de la plataforma?",
      answer: "Todas sus funciones son gratuitas. Estamos trabajando para añadir planes premium con opciones avanzadas."
    },
    {
      question: "¿Es necesario registrarse?",
      answer: "No, solo entra y crear tus prompts y personalizar más la experiencia."
    },
    {
      question: "¿Los prompts se pueden detallar o personalizar?",
      answer: "Sí. Puedes ajustar múltiples parámetros visuales para generar prompts detallados y adaptados a lo que necesitas: estilo, composición, iluminación, personajes, objetos, y mucho más."
    }
    
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        <p className="faq-subtitle">Sobre el generador de prompts para imágenes con IA</p>
        
        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div className="faq-card" key={index}>
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;