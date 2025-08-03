import React from "react";
import "../styles/ejemplos.css";

export default function EjemploCard({ imagen, prompt }) {
  return (
    <div className="ejemplo-card-split">
      <div className="ejemplo-img-wrapper">
        <img src={imagen} alt="Imagen generada" className="ejemplo-img-split" />
      </div>
      <div className="ejemplo-prompt-split">
        <p>{prompt}</p>
      </div>
    </div>
  );
}