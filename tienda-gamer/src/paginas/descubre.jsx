// src/paginas/Descubre.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Descubre() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  
  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'accion', nombre: 'Acción' },
    { id: 'aventura', nombre: 'Aventura' },
    { id: 'rpg', nombre: 'RPG' },
    { id: 'estrategia', nombre: 'Estrategia' },
  ];

  const noticias = [
    {
      id: 1,
      titulo: "Black Myth: Wukong revela nuevo gameplay",
      categoria: "accion",
      imagen: "/public/recursos/imagenes/noticias/black-myth-wukong-news.jpg",
      fecha: "20 Nov 2024",
      descripcion: "El esperado RPG de acción muestra nuevas mecánicas de combate y escenarios...",
      link: "#"
    },
    {
      id: 2,
      titulo: "Actualización masiva llega a Fortnite",
      categoria: "estrategia",
      imagen: "/public/recursos/imagenes/noticias/fortnite-update.jpg",
      fecha: "19 Nov 2024",
      descripcion: "Nueva temporada trae cambios significativos al mapa y mecánicas de juego...",
      link: "#"
    }
  ];

  const proximos = [
    {
      id: 1,
      nombre: "Star Wars Outlaws",
      fecha: "2024",
      imagen: "/public/recursos/imagenes/juegos/destacados/3 Slider - star wars outlaws.jpg",
      descripcion: "Un juego de mundo abierto ambientado en el universo de Star Wars..."
    },
    {
      id: 2,
      nombre: "Black Myth: Wukong",
      fecha: "24 Enero 2024",
      imagen: "/public/recursos/imagenes/juegos/destacados/1 Slider - black myth wukong.jpg",
      descripcion: "Una aventura de acción basada en la mitología china..."
    }
  ];

  const plataformas = [
    {
      nombre: "PS5",
      icono: "/public/recursos/imagenes/plataformas/ps5.png",
      descripcion: "Experimenta el futuro del gaming con PlayStation 5"
    },
    {
      nombre: "Xbox Series X",
      icono: "/public/recursos/imagenes/plataformas/xbox.png",
      descripcion: "La consola más potente de Microsoft"
    },
    {
      nombre: "PC",
      icono: "/public/recursos/imagenes/plataformas/pc.png",
      descripcion: "La plataforma definitiva para gaming"
    },
    {
      nombre: "Nintendo Switch",
      icono: "/public/recursos/imagenes/plataformas/switch.png",
      descripcion: "Juega donde quieras con Nintendo Switch"
    }
  ];

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primario to-secundario">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Descubre Nuevos Mundos</h1>
            <p className="text-xl mb-8">Explora las últimas novedades en el mundo de los videojuegos</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primario px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Explorar Ahora
            </motion.button>
          </div>
        </div>
      </section>

      {/* Novedades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Últimas Novedades</h2>
          
          {/* Filtros */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoriaChange(cat.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  categoriaSeleccionada === cat.id
                    ? 'bg-primario text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>

          {/* Grid de noticias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <motion.article 
                key={noticia.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{noticia.fecha}</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {categorias.find(cat => cat.id === noticia.categoria)?.nombre}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
                  <p className="text-gray-600 mb-4">{noticia.descripcion}</p>
                  <a 
                    href={noticia.link}
                    className="text-primario font-medium hover:text-secundario transition-colors"
                  >
                    Leer más →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Lanzamientos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Próximos Lanzamientos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proximos.map((juego) => (
              <motion.div
                key={juego.id}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={juego.imagen} 
                  alt={juego.nombre}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{juego.nombre}</h3>
                  <p className="text-gray-300 mb-2">{juego.descripcion}</p>
                  <p className="text-white font-semibold">Lanzamiento: {juego.fecha}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Plataformas Disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plataformas.map((plataforma, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <img 
                  src={plataforma.icono} 
                  alt={plataforma.nombre}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-bold mb-2">{plataforma.nombre}</h3>
                <p className="text-gray-600">{plataforma.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}