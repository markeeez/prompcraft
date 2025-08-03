// src/pages/AvisoLegal.js
import React from "react";
import "../styles/legal.css"; // O el archivo donde tienes estas clases

const AvisoLegal = () => {
  return (
    <main className="page-wrapper">
      <div className="cookies-main">
        <h1 className="cookies-titulo">Aviso Legal</h1>
        <p className="cookies-subtitulo">
          Información conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI).
        </p>

        <section className="cookies-seccion">
          <h2>Responsable del sitio web</h2>
          <p>
            Este sitio web, <strong>PromptCraft</strong>, ha sido creado con fines informativos y de entretenimiento. 
            Su responsable es un particular, sin ánimo de lucro ni actividad empresarial registrada.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>Contenido y finalidad</h2>
          <p>
            La finalidad de esta web es ofrecer una herramienta para generar prompts visuales orientados a la creación de imágenes mediante inteligencia artificial. 
            Algunos contenidos pueden incluir anuncios mediante Google AdSense.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>Propiedad intelectual</h2>
          <p>
            El diseño, código y contenidos de esta web son propiedad de su autor o se utilizan con licencia. 
            Queda prohibida su reproducción total o parcial sin autorización previa.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>Enlaces externos</h2>
          <p>
            Este sitio puede contener enlaces a páginas de terceros. No nos responsabilizamos del contenido o funcionamiento de estas páginas externas.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>Publicidad</h2>
          <p>
            Este sitio muestra anuncios gestionados por Google AdSense. Estos anuncios pueden utilizar cookies para mostrar contenido relevante. 
            Puedes consultar más información en nuestra <a href="/politica-cookies">Política de Cookies</a> y <a href="/politica-privacidad">Política de Privacidad</a>.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>Legislación aplicable</h2>
          <p>
            Este sitio se rige por la legislación española. En caso de disputa, ambas partes se someterán a los tribunales del domicilio del usuario.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AvisoLegal;

