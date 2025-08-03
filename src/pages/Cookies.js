import '../styles/legal.css'; 

const Cookies = () => {
  return (
    <>
    <div className="page-wrapper">
      <main className="cookies-main">
        <h1 className="cookies-titulo">Política de Cookies</h1>
        <p className="cookies-subtitulo">Esta web utiliza cookies para mejorar tu experiencia de usuario.</p>

        <section className="cookies-seccion">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en tu dispositivo al visitar una página web.
            Se utilizan para recordar tus preferencias y ofrecerte contenido personalizado.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>¿Qué tipos de cookies utilizamos?</h2>
          <ul>
            <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio.</li>
            <li><strong>Cookies de análisis:</strong> nos ayudan a entender cómo interactúan los usuarios con nuestra web.</li>
            <li><strong>Cookies de personalización:</strong> recuerdan tus preferencias para mejorar tu experiencia.</li>
          </ul>
        </section>

        <section className="cookies-seccion">
          <h2>¿Cómo puedes gestionar las cookies?</h2>
          <p>
            Puedes configurar tu navegador para aceptar o rechazar cookies. También puedes borrar las cookies almacenadas desde los ajustes del navegador.
          </p>
        </section>

        <section className="cookies-seccion">
          <h2>Más información</h2>
          <p>
            Para más detalles, consulta nuestra <a href="/privacidad">Política de Privacidad</a>.
          </p>
        </section>
      </main>
      </div>
    </>
  );
};

export default Cookies;

