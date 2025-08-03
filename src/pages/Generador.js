// src/pages/Generador.js
import '../styles/generador.css';
import SelectInput from '../components/SelectInput';
import { useEffect, useState } from 'react';

const Generador = () => {
  useEffect(() => {
    document.body.classList.add('generador-bg');
    return () => {
      document.body.classList.remove('generador-bg');
    };
  }, []);
  
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generarPrompt());
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  const [ideaPrincipal, setIdeaPrincipal] = useState('');
  const [estiloVisual, setEstiloVisual] = useState('');

  const [brillo, setBrillo] = useState(50);
  const [contraste, setContraste] = useState(50);
  const [saturacion, setSaturacion] = useState(50);
  const [sombras, setSombras] = useState(50);

  const [calidad, setCalidad] = useState('');
  const [iluminacion, setIluminacion] = useState('');
  const [acabado, setAcabado] = useState('');

  const [entornoTipo, setEntornoTipo] = useState('');
  const [entornoElementos, setEntornoElementos] = useState('');
  const [entornoEstilo, setEntornoEstilo] = useState('');

  const [tipoPlano, setTipoPlano] = useState('');
  const [relacionAspecto, setRelacionAspecto] = useState('');
  const [profundidadCampo, setProfundidadCampo] = useState('');

  const [personajes, setPersonajes] = useState([
    { posicion: '', edad: '', genero: '', ropa: '', rasgos: '', elementos: '' }
  ]);

  const [objetos, setObjetos] = useState([
    { tipo: '', descripcion: '' }
  ]);

  const [animales, setAnimales] = useState([
    { especie: '', posicion: '', descripcion: '' }
  ]);

  const agregarPersonaje = () => {
    setPersonajes([...personajes, { posicion: 'A la izquierda', edad: '', genero: '', ropa: '', rasgos: '', elementos: '' }]);
  };

  const eliminarPersonaje = (index) => {
    const nuevos = [...personajes];
    nuevos.splice(index, 1);
    setPersonajes(nuevos);
  };

  const actualizarPersonaje = (index, campo, valor) => {
    const nuevos = [...personajes];
    nuevos[index][campo] = valor;
    setPersonajes(nuevos);
  };

  const agregarObjeto = () => {
    setObjetos([...objetos, { tipo: '', descripcion: '' }]);
  };

  const eliminarObjeto = (index) => {
    const nuevos = [...objetos];
    nuevos.splice(index, 1);
    setObjetos(nuevos);
  };

  const actualizarObjeto = (index, campo, valor) => {
    const nuevos = [...objetos];
    nuevos[index][campo] = valor;
    setObjetos(nuevos);
  };

  const agregarAnimal = () => {
    setAnimales([...animales, { especie: '', posicion: '', descripcion: '' }]);
  };

  const eliminarAnimal = (index) => {
    const nuevos = [...animales];
    nuevos.splice(index, 1);
    setAnimales(nuevos);
  };

  const actualizarAnimal = (index, campo, valor) => {
    const nuevos = [...animales];
    nuevos[index][campo] = valor;
    setAnimales(nuevos);
  };


  const resetearFormulario = () => {
    setIdeaPrincipal('');
    setEstiloVisual('Fotorrealista');

    setBrillo(50);
    setContraste(50);
    setSaturacion(50);
    setSombras(50);

    setCalidad('');
    setIluminacion('');
    setAcabado('');

    setEntornoTipo('');
    setEntornoElementos('');
    setEntornoEstilo('');

    setTipoPlano('');
    setRelacionAspecto('');
    setProfundidadCampo('');

    setPersonajes([{ posicion: '', edad: '', genero: '', ropa: '', rasgos: '', elementos: '' }]);
    setObjetos([{ tipo: '', descripcion: '' }]);
    setAnimales([{ especie: '', posicion: '', descripcion: '' }]);
  };


const generarPrompt = () => {
  const idea = ideaPrincipal.trim();
  const estilo = estiloVisual.trim();

  // Detecta si se debe mostrar cada bloque
  const mostrarEstilo = estilo && idea.length > 0;
  const mostrarEdicion = brillo !== 50 || contraste !== 50 || saturacion !== 50 || sombras !== 50;

  const mostrarRender = [calidad, iluminacion, acabado].some(val => val && val.trim() !== '');
  const mostrarEntorno = [entornoTipo, entornoElementos, entornoEstilo].some(val => val && val.trim() !== '');
  const mostrarCamara = [tipoPlano, relacionAspecto, profundidadCampo].some(val => val && val.trim() !== '');

  // Filtrado de personajes, objetos y animales con contenido
  const personajesFiltrados = personajes.filter(p =>
    p.posicion.trim() || p.edad.trim() || p.genero.trim() || p.ropa.trim() || p.rasgos.trim() || p.elementos.trim()
  );
  const descripcionPersonajes = personajesFiltrados.map(p => {
    let desc = '• Personaje';

    if (p.posicion.trim()) desc += ` ${p.posicion.toLowerCase()}`;
    if (p.genero.trim()) desc += ` — ${p.genero}`;
    if (p.edad.trim()) desc += `, ${p.edad} años`;

    const detalles = [];

    if (p.ropa.trim()) detalles.push(`Ropa: ${p.ropa}`);
    if (p.rasgos.trim()) detalles.push(`Rasgos: ${p.rasgos}`);
    if (p.elementos.trim()) detalles.push(`Elementos: ${p.elementos}`);

    if (detalles.length > 0) {
      desc += `. ${detalles.join('. ')}`;
    }

    return desc + '.';
  }).join('\n');

  const objetosFiltrados = objetos.filter(o => o.tipo.trim() || o.descripcion.trim());
  const descripcionObjetos = objetosFiltrados.map(o =>
    `• Objeto (${o.tipo}): ${o.descripcion}`
  ).join('\n');

  const animalesFiltrados = animales.filter(a => a.especie.trim() || a.posicion.trim() || a.descripcion.trim());
  const descripcionAnimales = animalesFiltrados.map(a =>
    `• Animal (${a.especie}) ${a.posicion}: ${a.descripcion}`
  ).join('\n');

  // Si no hay idea, no generamos nada
  if (!idea) return '';

  // Primera línea del prompt
  let prompt = '';
  if (mostrarEstilo) {
    prompt = `Imagen estilo ${estiloVisual}, con la siguiente idea principal: ${idea}.`;
  } else {
    prompt = idea;
  }

  if (mostrarEdicion) {
    prompt += `

Ajustes visuales: brillo ${brillo}%, contraste ${contraste}%, saturación ${saturacion}%, sombras ${sombras}%`;
  }

  if (mostrarRender) {
    prompt += `

Render${calidad ? ' en ' + calidad : ''}${iluminacion ? ', iluminación ' + iluminacion : ''}${acabado ? ', acabado: ' + acabado : ''}`;
  }

  if (mostrarEntorno) {
    prompt += `

Entorno:${entornoTipo ? ' tipo ' + entornoTipo : ''}${entornoElementos ? ', elementos: ' + entornoElementos : ''}${entornoEstilo ? ', estilo: ' + entornoEstilo : ''}`;
  }

  if (mostrarCamara) {
    prompt += `

Dirección de cámara:${tipoPlano ? ' ' + tipoPlano : ''}${relacionAspecto ? ', relación de aspecto ' + relacionAspecto : ''}${profundidadCampo ? ', profundidad de campo ' + profundidadCampo : ''}`;
  }

  if (descripcionPersonajes) {
    prompt += `

Personajes:
${descripcionPersonajes}`;
  }

  if (descripcionObjetos) {
    prompt += `

Objetos:
${descripcionObjetos}`;
  }

  if (descripcionAnimales) {
    prompt += `

Animales:
${descripcionAnimales}`;
  }

  return prompt;
};


  return (
    <div className="generador-page">
      <div className="generador-container">
        <div className="ajustes-panel">
          <h2 className="titulo-panel">Ajustes de Generación de Imagen</h2>

          <div className="campo">
            <label>Idea Principal de la Imagen</label>
            <input
              type="text"
              placeholder="Ej: Un dragón en una playa al atardecer..."
              value={ideaPrincipal}
              onChange={(e) => setIdeaPrincipal(e.target.value)}
            />
          </div>

          <SelectInput
            id="estilo-visual"
            label="Estilo Visual"
            value={estiloVisual}
            onChange={(e) => setEstiloVisual(e.target.value)}
            options={[
              { value: 'Realista', label: 'Realista' },
              { value: 'Cartoon', label: 'Cartoon' },
              { value: 'Ilustración digital', label: 'Ilustración digital' },
              { value: '3D Pixar', label: '3D Pixar' },
              { value: 'Anime', label: 'Anime' },
              { value: 'Steampunk', label: 'Steampunk' },
              { value: 'Cinematográfico', label: 'Cinematográfico' },
              { value: 'Ghibli', label: 'Ghibli' },
            ]}
          />

          <details className="colapsable">
            <summary>Ajustes de Edición</summary>
            <div className="ajustes-edicion">
              <label>Brillo</label>
              <input type="range" min="0" max="100" value={brillo} onChange={(e) => setBrillo(e.target.value)} />
              <label>Contraste</label>
              <input type="range" min="0" max="100" value={contraste} onChange={(e) => setContraste(e.target.value)} />
              <label>Saturación</label>
              <input type="range" min="0" max="100" value={saturacion} onChange={(e) => setSaturacion(e.target.value)} />
              <label>Sombras</label>
              <input type="range" min="0" max="100" value={sombras} onChange={(e) => setSombras(e.target.value)} />
                <button
                className="boton-verde reset-ajustes"
                onClick={() => {
                  setBrillo(50);
                  setContraste(50);
                  setSaturacion(50);
                  setSombras(50);
                }}
                style={{ marginTop: '12px' }}
              >
                Restablecer ajustes
              </button>
            </div>
          </details>

          <details className="colapsable">
            <summary>Estética y Renderizado</summary>
            <div className="ajustes-edicion renderizado-grupo">
              <div className="grupo-campo">
                <SelectInput
                  id="calidad"
                  label="Calidad de imagen"
                  value={calidad}
                  onChange={(e) => setCalidad(e.target.value)}
                  options={[
                    { value: '', label: '-- Selecciona calidad --' },
                    { value: '4K', label: '4K' },
                    { value: '1080p', label: '1080p' },
                    { value: '720p', label: '720p' },
                  ]}
                />
              </div>
              <div className="grupo-campo">
                <SelectInput
                  id="iluminacion"
                  label="Iluminación"
                  value={iluminacion}
                  onChange={(e) => setIluminacion(e.target.value)}
                  options={[
                    { value: '', label: '-- Selecciona iluminación --' },
                    { value: 'Golden hour', label: 'Golden hour' },
                    { value: 'Luz de estudio', label: 'Luz de estudio' },
                    { value: 'Luz natural', label: 'Luz natural' },
                    { value: 'Luz artificial', label: 'Luz artificial' },
                    { value: 'Luz cálida', label: 'Luz cálida' },
                    { value: 'Luz fría', label: 'Luz fría' },
                  ]}
                />
              </div>
            <div className="grupo-campo">
              <SelectInput
                id="acabado"
                label="Acabado"
                value={acabado}
                onChange={(e) => setAcabado(e.target.value)}
                options={[
                  { value: '', label: '-- Selecciona acabado --' },
                  { value: 'Bloom ligero', label: 'Bloom ligero' },
                  { value: 'Suavizado PBR', label: 'Suavizado PBR' },
                ]}
              />
            </div>
            </div>
          </details>

          <details className="colapsable">
            <summary>Entorno</summary>
            <div className="ajustes-edicion renderizado-grupo">
              <div className="grupo-campo">
                <label>Tipo de entorno</label>
                <input type="text" value={entornoTipo} onChange={(e) => setEntornoTipo(e.target.value)} />
              </div>
              <div className="grupo-campo">
                <label>Elementos del entorno</label>
                <input type="text" value={entornoElementos} onChange={(e) => setEntornoElementos(e.target.value)} />
              </div>
              <div className="grupo-campo">
                <label>Estilo del entorno</label>
                <input type="text" value={entornoEstilo} onChange={(e) => setEntornoEstilo(e.target.value)} />
              </div>
            </div>
          </details>

        <details className="colapsable">
          <summary>Dirección de Cámara</summary>
          <div className="ajustes-edicion renderizado-grupo">
            <div className="grupo-campo">
              <SelectInput
                id="tipo-plano"
                label="Tipo de plano"
                value={tipoPlano}
                onChange={(e) => setTipoPlano(e.target.value)}
                options={[
                  { value: '', label: '-- Selecciona tipo de plano --' },
                  { value: 'Plano general', label: 'Plano general' },
                  { value: 'Primer plano', label: 'Primer plano' },
                  { value: 'Plano medio', label: 'Plano medio' },
                  { value: 'Plano bajo', label: 'Plano bajo' },
                  { value: 'Contrapicado', label: 'Contrapicado' },
                ]}
              />
            </div>

            <div className="grupo-campo">
              <SelectInput
                id="relacion-aspecto"
                label="Relación de aspecto"
                value={relacionAspecto}
                onChange={(e) => setRelacionAspecto(e.target.value)}
                options={[
                  { value: '', label: '-- Selecciona aspecto --' },
                  { value: '16:9', label: '16:9' },
                  { value: '4:3', label: '4:3' },
                  { value: '9:16', label: '9:16' },
                  { value: '1:1', label: '1:1' },
                ]}
              />
            </div>

            <div className="grupo-campo">
              <SelectInput
                id="profundidad-campo"
                label="Profundidad de campo"
                value={profundidadCampo}
                onChange={(e) => setProfundidadCampo(e.target.value)}
                options={[
                  { value: '', label: '-- Selecciona profundidad --' },
                  { value: 'Moderada (f/2.8)', label: 'Moderada (f/2.8)' },
                  { value: 'Alta (f/1.4)', label: 'Alta (f/1.4)' },
                  { value: 'Media (f/3.5)', label: 'Media (f/3.5)' },
                  { value: 'Baja (f/8)', label: 'Baja (f/8)' },
                ]}
              />
            </div>

          </div>
        </details>

          <details className="colapsable">
            <summary>Personajes</summary>
            <div className="ajustes-edicion">
              {personajes.map((p, i) => (
                <div key={i} className="campo">
                  <SelectInput
                    id={`posicion-${i}`}
                    label="Posición en la escena"
                    value={p.posicion}
                    onChange={(e) => {
                      const nuevos = [...personajes];
                      nuevos[i].posicion = e.target.value;
                      setPersonajes(nuevos);
                    }}
                    options={[
                      { value: '', label: '-- Selecciona posición --' },
                      { value: 'a la izquierda', label: 'A la izquierda' },
                      { value: 'a la derecha', label: 'A la derecha' },
                      { value: 'al fondo', label: 'Al fondo' },
                      { value: 'en primer plano', label: 'En primer plano' },
                    ]}
                  />
                  <label>Edad</label>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" value={p.edad} onChange={(e) => {
                  const valor = e.target.value;
                      if (/^\d*$/.test(valor)) {
                        actualizarPersonaje(i, 'edad', valor);
                      }
                    }}
                  />
                  <label>Género</label>
                  <input type="text" value={p.genero} onChange={(e) => actualizarPersonaje(i, 'genero', e.target.value)} />
                  <label>Ropa</label>
                  <input type="text" value={p.ropa} onChange={(e) => actualizarPersonaje(i, 'ropa', e.target.value)} />
                  <label>Rasgos</label>
                  <input type="text" value={p.rasgos} onChange={(e) => actualizarPersonaje(i, 'rasgos', e.target.value)} />
                  <label>Elementos</label>
                  <input type="text" value={p.elementos} onChange={(e) => actualizarPersonaje(i, 'elementos', e.target.value)} />
                  <button className="boton-verde" type="button" onClick={() => eliminarPersonaje(i)}>Eliminar</button>
                  <hr />
                </div>
              ))}
              <button className="boton-verde" type="button" onClick={agregarPersonaje}>+ Añadir Personaje</button>
            </div>
          </details>

          <details className="colapsable">
            <summary>Objetos</summary>
            <div className="ajustes-edicion">
              {objetos.map((o, i) => (
                <div key={i} className="campo">
                  <label>Tipo</label>
                  <input type="text" value={o.tipo} onChange={(e) => actualizarObjeto(i, 'tipo', e.target.value)} />
                  <label>Descripción</label>
                  <input type="text" value={o.descripcion} onChange={(e) => actualizarObjeto(i, 'descripcion', e.target.value)} />
                  <button className="boton-verde" type="button" onClick={() => eliminarObjeto(i)}>Eliminar</button>
                  <hr />
                </div>
              ))}
              <button className="boton-verde" type="button" onClick={agregarObjeto}>+ Añadir Objeto</button>
            </div>
          </details>

          <details className="colapsable">
            <summary>Animales</summary>
            <div className="ajustes-edicion">
              {animales.map((a, i) => (
                <div key={i} className="campo">
                  <label>Especie</label>
                  <input type="text" value={a.especie} onChange={(e) => actualizarAnimal(i, 'especie', e.target.value)} />
                  <label>Posición en la escena</label>
                  <input type="text" value={a.posicion} onChange={(e) => actualizarAnimal(i, 'posicion', e.target.value)} />
                  <label>Descripción</label>
                  <input type="text" value={a.descripcion} onChange={(e) => actualizarAnimal(i, 'descripcion', e.target.value)} />
                  <button className="boton-verde" type="button" onClick={() => eliminarAnimal(i)}>Eliminar</button>
                  <hr />
                </div>
              ))}
              <button className="boton-verde" type="button" onClick={agregarAnimal}>+ Añadir Animal</button>
            </div>
          </details>
        </div>

        <div className="preview-panel">
          <h2 className="titulo-panel">Prompt Generado</h2>
          <textarea
            value={generarPrompt()}
            readOnly
            rows={28}
            className="preview-textarea"
          />
        <div className="contenedor-botones-toast">
          <div className="botones-acciones">
            <button className="boton-verde" onClick={handleCopy}>
              Copiar Prompt
            </button>
            <button 
              onClick={resetearFormulario} 
              className="boton-verde"
            >
              Reestablecer Prompt
            </button>
          </div>

          {showToast && (
            <div className="toast-copiado">
              ¡Prompt copiado!
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Generador;