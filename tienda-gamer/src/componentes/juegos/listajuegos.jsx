// src/componentes/juegos/ListaJuegos.jsx
import TarjetaJuego from './tarjetajuego';

export default function ListaJuegos() {
  const juegos = [
    {
      id: 1,
      titulo: "Black Myth: Wukong",
      imagen: "/public/recursos/imagenes/juegos/carrusel/1 - Black myth wukong.jpg",
      descripcion: "Una épica aventura de acción RPG basada en la novela clásica china 'Viaje al Oeste'. Enfréntate a criaturas místicas y dioses en un mundo de fantasía oriental.",
      precio: 259900,
      caracteristicas: [
        "Gráficos de última generación con Unreal Engine 5",
        "Combate profundo inspirado en los souls-like",
        "Historia rica basada en la mitología china",
        "Mundo abierto lleno de secretos"
      ],
      demo: true
    },
    {
      id: 2,
      titulo: "Fortnite",
      imagen: "/public/recursos/imagenes/juegos/carrusel/11 - fortnite.jpg",
      descripcion: "El fenómeno mundial del battle royale. Construye, lucha y sobrevive en un mundo colorido y en constante evolución.",
      precio: 0,
      caracteristicas: [
        "Battle Royale gratuito",
        "Construcción estratégica",
        "Eventos y colaboraciones exclusivas",
        "Pase de batalla con recompensas únicas"
      ],
      demo: false
    },
    {
      id: 3,
      titulo: "Star Wars Outlaws",
      imagen: "/public/recursos/imagenes/juegos/carrusel/3 - star wars outlaws.jpg",
      descripcion: "Vive tu propia historia en el submundo criminal de Star Wars. Explora planetas, forma alianzas y conviértete en el contrabandista más buscado de la galaxia.",
      precio: 299900,
      caracteristicas: [
        "Mundo abierto en el universo de Star Wars",
        "Sistema de reputación dinámico",
        "Personalización profunda del personaje",
        "Misiones secundarias ramificadas"
      ],
      demo: true
    },
    {
      id: 4,
      titulo: "God of War Ragnarök",
      imagen: "/public/recursos/imagenes/juegos/carrusel/8 - god of war ragnarok.jpg",
      descripcion: "Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en búsqueda de respuestas mientras las fuerzas asgardianas se preparan para la guerra.",
      precio: 279900,
      caracteristicas: [
        "Combate visceral y cinematográfico",
        "Historia emotiva padre-hijo",
        "Exploración de la mitología nórdica",
        "Gráficos espectaculares"
      ],
      demo: false
    },
    {
      id: 5,
      titulo: "Red Dead Redemption 2",
      imagen: "/public/recursos/imagenes/juegos/carrusel/6 - red dead redemption 2.jpg",
      descripcion: "Una épica historia del Salvaje Oeste. Vive la vida de Arthur Morgan, un forajido en busca de redención en un mundo que está cambiando inexorablemente.",
      precio: 199900,
      caracteristicas: [
        "Mundo abierto ultradetallado",
        "Historia profunda y emocional",
        "Sistema de honor dinámico",
        "Multijugador online incluido"
      ],
      demo: true
    },
    {
      id: 6,
      titulo: "Resident Evil 4 Remake",
      imagen: "/public/recursos/imagenes/juegos/carrusel/2 - Resident Evil 4 Remake.jpg",
      descripcion: "Una reimaginación moderna del clásico juego de supervivencia y horror. Leon Kennedy debe rescatar a la hija del presidente en un pueblo infestado de plagas.",
      precio: 239900,
      caracteristicas: [
        "Gráficos completamente renovados",
        "Sistema de combate modernizado",
        "Nuevas mecánicas de sigilo",
        "Contenido adicional exclusivo"
      ],
      demo: true
    },
    {
      id: 7,
      titulo: "Elden Ring",
      imagen: "/public/recursos/imagenes/juegos/carrusel/4 - elden ring.jpg",
      descripcion: "Explora las Tierras Intermedias en esta obra maestra de FromSoftware y George R.R. Martin. Un mundo vasto lleno de misterios, peligros y desafíos.",
      precio: 259900,
      caracteristicas: [
        "Mundo abierto con diseño único",
        "Combate desafiante y gratificante",
        "Historia colaborativa con G.R.R. Martin",
        "Multijugador cooperativo y PvP"
      ],
      demo: false
    },
    {
      id: 8,
      titulo: "Astro Bot",
      imagen: "/public/recursos/imagenes/juegos/carrusel/5 - astro bot.jpg",
      descripcion: "Una encantadora aventura de plataformas en realidad virtual. Ayuda a Astro a rescatar a su tripulación en niveles creativos y coloridos.",
      precio: 149900,
      caracteristicas: [
        "Experiencia VR inmersiva",
        "Niveles imaginativos",
        "Controles intuitivos",
        "Coleccionables únicos"
      ],
      demo: true
    },
    {
      id: 9,
      titulo: "Hogwarts Legacy",
      imagen: "/public/recursos/imagenes/juegos/carrusel/7 - hogwarts legacy.jpg",
      descripcion: "Vive tu propia aventura en el mundo mágico del siglo XIX. Asiste a clases, aprende hechizos y descubre los secretos de Hogwarts.",
      precio: 259900,
      caracteristicas: [
        "Mundo abierto mágico",
        "Sistema de combate con hechizos",
        "Personalización profunda",
        "Historia original en el universo HP"
      ],
      demo: false
    },
    {
      id: 10,
      titulo: "Warhammer 40,000: Space Marine 2",
      imagen: "/public/recursos/imagenes/juegos/carrusel/9 - Warhammer 40.000 - Space Marine 2.jpg",
      descripcion: "Encarna a un poderoso Space Marine en esta secuela muy esperada. Combate hordas de enemigos en el oscuro futuro del año 40,000.",
      precio: 239900,
      caracteristicas: [
        "Combate brutal y visceral",
        "Campaña épica",
        "Personalización de armadura",
        "Modo cooperativo"
      ],
      demo: true
    },
    {
      id: 11,
      titulo: "Grand Theft Auto V",
      imagen: "/public/recursos/imagenes/juegos/carrusel/10 - Grand Theft Auto V.jpg",
      descripcion: "Explora Los Santos en esta obra maestra del mundo abierto. Vive las historias entrelazadas de tres criminales únicos en una ciudad llena de posibilidades.",
      precio: 179900,
      caracteristicas: [
        "Mundo abierto detallado",
        "Tres protagonistas jugables",
        "GTA Online incluido",
        "Contenido constantemente actualizado"
      ],
      demo: false
    },
    {
      id: 12,
      titulo: "Overcooked 2",
      imagen: "/public/recursos/imagenes/juegos/carrusel/12 - overcooked 2.jpg",
      descripcion: "El caos culinario regresa en esta secuela. Cocina en equipo en las cocinas más locas y desafiantes jamás creadas.",
      precio: 89900,
      caracteristicas: [
        "Cooperativo local y online",
        "Nuevas recetas y mecánicas",
        "Niveles dinámicos",
        "Modo versus"
      ],
      demo: true
    },
    {
      id: 13,
      titulo: "Dead by Daylight",
      imagen: "/public/recursos/imagenes/juegos/carrusel/13 - dead by daylight.jpg",
      descripcion: "Un juego de horror asimétrico donde cuatro supervivientes deben escapar de un asesino. Incluye personajes icónicos del horror.",
      precio: 79900,
      caracteristicas: [
        "Juego asimétrico 4vs1",
        "Personajes del cine de terror",
        "Progresión y personalización",
        "Contenido regular nuevo"
      ],
      demo: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {juegos.map((juego) => (
        <TarjetaJuego key={juego.id} juego={juego} />
      ))}
    </div>
  );
}