// src/componentes/juegos/CarruselJuegos.jsx
import { useState, useEffect } from 'react';

export default function CarruselJuegos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const juegos = [
    {
      id: 1,
      titulo: "Black Myth: Wukong",
      imagen: "/public/recursos/imagenes/juegos/destacados/1 Slider - black myth wukong.jpg",
      descripcion: "Es un juego de acción aventura inspirada en la clásica novela Viaje al Oeste..."
    },
    {
      id: 2,
      titulo: "Fortnite",
      imagen: "/public/recursos/imagenes/juegos/destacados/2 Slider - fortnite.jpg",
      descripcion: "Fortnite es un juego de estrategia y acción en el que los jugadores controlan a un personaje llamado Fortnite, que se mueve por el mapa y puede atacar a otros jugadores."
    },
    {
      id: 3,
      titulo: "Star Wars Outlaws",
      imagen: "/public/recursos/imagenes/juegos/destacados/3 Slider - star wars outlaws.jpg",
      descripcion: "Star Wars Outlaws es un juego de acción aventura inspirado en la clásica novela Viaje al Oeste, donde los jugadores controlan a un personaje llamado Rey, que se mueve por el mapa y puede atacar a otros jugadores."
    },
    {
      id: 4,
      titulo: "God of War Ragnarok",
      imagen: "/public/recursos/imagenes/juegos/destacados/4 Slider - god of war ragnarok.jpg",
      descripcion: "God of War Ragnarok es un juego de acción aventura inspirado en la clásica novela El juego de la muerte, donde los jugadores controlan a un personaje llamado Joe, que se mueve por el mapa y puede atacar a otros jugadores."
    },
    {
      id: 5,
      titulo: "Red Dead Redemption 2",
      imagen: "/public/recursos/imagenes/juegos/destacados/5 Slider - red dead redemption 2.jpg",
      descripcion: "Red Dead Redemption 2 es un juego de acción aventura inspirado en la clásica novela El juego de la muerte, donde los jugadores controlan a un personaje llamado Joe, que se mueve por el mapa y puede atacar a otros jugadores."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === juegos.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 mb-12">

      <div className="relative w-full h-[600px] bg-gray-200 rounded-lg overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {juegos.map((juego) => (
            <div key={juego.id} className="w-full flex-shrink-0 relative">
              <img
                src={juego.imagen}
                alt={juego.titulo}
                className="w-full h-full object-cover"
              />
              {/* Gradiente superior a inferior */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90" />
              
              {/* Texto */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-4xl font-bold mb-4">
                  {juego.titulo}
                </h3>
                <p className="text-gray-200 text-lg">
                  {juego.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
          onClick={() => setCurrentSlide(prev => prev === 0 ? juegos.length - 1 : prev - 1)}
        >
          ←
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
          onClick={() => setCurrentSlide(prev => prev === juegos.length - 1 ? 0 : prev + 1)}
        >
          →
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {juegos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}