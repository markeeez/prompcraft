// src/pages/Privacidad.js
import '../styles/legal.css'; 

const Privacidad = () => {
  return (
    <>
      <div className="page-wrapper">
      <main className="cookies-main">
        <h1 className="cookies-titulo">Política de Privacidad</h1>
        <p className="cookies-subtitulo">
          Última actualización: agosto 2025
        </p>

        <section className="cookies-seccion">
          <h2>Acceso a nuestra Política de Privacidad</h2>
          <p>
            Puedes consultar nuestra política de privacidad completa a través del siguiente enlace:
          </p>
          <p>
            <a
              href="https://www.privacypolicies.com/live/54887854-5017-482c-a228-e66942ec94ea"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Política de Privacidad
            </a>
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>¿Por qué enlazamos a un documento externo?</h2>
          <p>
            Usamos un servicio profesional para asegurar que nuestra política de privacidad esté siempre actualizada y cumpla con la legislación vigente, incluyendo el Reglamento General de Protección de Datos (RGPD) y otras normativas aplicables.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>¿Qué incluye nuestra política?</h2>
          <ul>
            <li>Qué datos personales recogemos</li>
            <li>Cómo usamos esos datos</li>
            <li>Uso de cookies y tecnologías similares</li>
            <li>Terceros que pueden recibir información (como Google Ads)</li>
            <li>Tus derechos y cómo ejercerlos</li>
          </ul>
        </section>

        <section className="cookies-seccion">
          <h2>¿Dudas o contacto?</h2>
          <p>
            Si tienes preguntas sobre nuestra política de privacidad o deseas ejercer tus derechos, puedes escribirnos a: <strong>tuemail@ejemplo.com</strong>
          </p>
        </section>
      </main>
      </div>
    </>
  );
};

export default Privacidad;
