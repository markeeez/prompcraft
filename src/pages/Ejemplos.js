import Header from "../components/header";
import EjemploCard from "../components/EjemploCard";
import "../styles/ejemplos.css";

// IMPORTS DE SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Ejemplo de datos estáticos
const ejemplos = [
  {
    imagen: "/imgs/mago.png",
    prompt: `Imagen estilo 3D Pixar, con la siguiente idea principal: un mago situado en la parte dercha de la imagen.

Ajustes visuales: brillo 40%, contraste 52%, saturación 46%, sombras 52%

Render en 1080p, iluminación Golden hour, acabado: Bloom ligero

Entorno: tipo bosque, elementos: pinos, setas, maleza, estilo: dramatico

Dirección de cámara: Primer plano, relación de aspecto 4:3, profundidad de campo Moderada (f/2.8)

Personajes:
• Personaje a la izquierda — Hombre, 33 años. Ropa: camisa roja. Rasgos: rasgos de enano. Elementos: sujeta un libro negro en la mano derecha.

Objetos:
• Objeto (anillo): anillo muy vistoso en la mano derecha del mago

Animales:
• Animal (cuervo) a la derecha encima de un pino: grande y tenebroso`
  },
  {
    imagen: "/imgs/superheroe.png",
    prompt: `Imagen estilo Ilustración digital, con la siguiente idea principal: superhéroe.

Ajustes visuales: brillo 38%, contraste 65%, saturación 48%, sombras 58%

Render en 1080p, iluminación Luz natural, acabado: Suavizado PBR

Entorno: tipo ciudad moderna, elementos: rascacielos iluminados, estilo: oscuro y moderno

Dirección de cámara: Plano general, relación de aspecto 4:3, profundidad de campo Alta (f/1.4)

Personajes:
• Personaje en primer plano — hombre, 35 años. Ropa: traje de superhéroe rojo. Rasgos: mandíbula cuadrada. Elementos: capa ondeando..

Objetos:
• Objeto (emblema): símbolo brillante en el pecho del héroe

Animales:
• Animal (halcón) sobrevolando el fondo: pequeño y estilizado`
  },
  {
    imagen: "/imgs/dragon.png",
    prompt: `Imagen estilo Ilustración digital, con la siguiente idea principal: dragón atacando una aldea.

Ajustes visuales: brillo 45%, contraste 70%, saturación 50%, sombras 65%

Render en 4K, iluminación Luz cálida, acabado: Bloom ligero

Entorno: tipo aldea medieval, elementos: casas de piedra, fuego, estilo: caótico

Dirección de cámara: Plano general, relación de aspecto 16:9, profundidad de campo Alta (f/1.4)

Personajes:
• Personaje — mujer, 40 años. Ropa: armadura de cuero. Rasgos: decidida. Elementos: arco.

Objetos:
• Objeto (escudo): caído en primer plano

Animales:
• Animal (dragón) volando sobre el pueblo: gigante y escupe fuego`
  },
  {
    imagen: "/imgs/vampiro.png",
    prompt: `Imagen estilo Ghibli, con la siguiente idea principal: vampiro solitario.

Ajustes visuales: brillo 30%, contraste 68%, saturación 42%, sombras 75%

Render en 1080p, iluminación Luz artificial, acabado: Suavizado PBR

Entorno: tipo calle victoriana, elementos: ladrillos mojados, farolas de gas, estilo: oscuro y misterioso

Dirección de cámara: Plano general, relación de aspecto 9:16, profundidad de campo Baja (f/8)

Personajes:
• Personaje a la izquierda — hombre. Ropa: traje negro y sombrero de copa. Rasgos: pálido. Elementos: bastón.

Objetos:
• Objeto (reloj): reloj de bolsillo antiguo

Animales:
• Animal (murciélago) volando en el fondo: pequeño y rápido`
  },
  {
    imagen: "/imgs/astronauta.png",
    prompt: `Imagen estilo Cartoon, con la siguiente idea principal: astronauta explorador.

Ajustes visuales: brillo 60%, contraste 55%, saturación 50%, sombras 40%

Render en 1080p, iluminación Luz fría, acabado: Suavizado PBR

Entorno: tipo planeta alienígena, elementos: rocas flotantes, cielo púrpura, estilo: surrealista

Dirección de cámara: Plano medio, relación de aspecto 16:9, profundidad de campo Alta (f/1.4)

Personajes:
• Personaje al fondo — hombre. Ropa: traje espacial blanco. Rasgos: visor espejado. Elementos: escáner de mano.

Objetos:
• Objeto (planta alien): luminiscente en el suelo`
  },
  {
    imagen: "/imgs/hechicera.png",
    prompt: `Imagen estilo Ilustración digital, con la siguiente idea principal: hechicera ritualista.

Ajustes visuales: brillo 55%, contraste 50%, saturación 66%, sombras 48%

Render en 1080p, iluminación Luz de estudio, acabado: Bloom ligero

Entorno: tipo bosque nocturno, elementos: árboles retorcidos, velas, estilo: místico

Dirección de cámara: Plano general, relación de aspecto 9:16, profundidad de campo Baja (f/8)

Personajes:
• Personaje al fondo — mujer, 27 años. Ropa: túnica oscura. Rasgos: ojos brillantes. Elementos: bastón mágico.

Objetos:
• Objeto (círculo de runas): grabado en el suelo`
  },
  {
    imagen: "/imgs/tortuga.png",
    prompt: `Imagen estilo Ilustración digital, con la siguiente idea principal: tortuga gigante en ciudad.

Ajustes visuales: brillo 50%, contraste 45%, saturación 58%, sombras 42%

Render en 1080p, iluminación Golden hour, acabado: Bloom ligero

Entorno: tipo ciudad moderna, elementos: coches detenidos, estilo: humorístico

Dirección de cámara: Plano bajo, relación de aspecto 16:9, profundidad de campo Moderada (f/2.8)

Personajes:
• Personaje a la derecha — niña, 10 años. Ropa: camiseta con tortugas. Rasgos: sonriente. Elementos: móvil en mano.

Objetos:
• Objeto (mochila): en el suelo con pegatinas

Animales:
• Animal (tortuga gigante) caminando en medio de la calle: enorme y lenta`
  },


 
];


const Ejemplos = () => {
  return (
    <>
      <Header />
      <main className="ejemplos-main">
        <h1 className="ejemplos-titulo">Galería de Ejemplos</h1>
        <p className="ejemplos-subtitulo">Explora las imágenes generadas con sus prompts detallados</p>

        <div className="ejemplos-carrusel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
              autoplay={{
              delay: 4000, 
              disableOnInteraction: false
            }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {ejemplos.map((ejemplo, index) => (
              <SwiperSlide key={index}>
                <div className="slide-container">
                  <EjemploCard
                    imagen={ejemplo.imagen}
                    prompt={ejemplo.prompt}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default Ejemplos;