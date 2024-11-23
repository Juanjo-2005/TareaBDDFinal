// src/paginas/Conocenos.jsx
import { motion } from 'framer-motion';

export default function Conocenos() {
  const equipo = [
    {
      nombre: "Ana Martínez",
      cargo: "CEO & Fundadora",
      imagen: "/public/recursos/imagenes/equipo/ana.jpg",
      descripcion: "Con más de 15 años de experiencia en la industria de videojuegos.",
      redes: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      nombre: "Carlos Rodríguez",
      cargo: "Director Técnico",
      imagen: "/public/recursos/imagenes/equipo/carlos.jpg",
      descripcion: "Especialista en desarrollo de plataformas de gaming.",
      redes: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      nombre: "Laura González",
      cargo: "Directora de Marketing",
      imagen: "/public/recursos/imagenes/equipo/laura.jpg",
      descripcion: "Experta en estrategias digitales y marketing de videojuegos.",
      redes: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const valores = [
    {
      titulo: "Pasión por los Juegos",
      descripcion: "Creemos que los videojuegos son una forma de arte que une a las personas.",
      icono: "🎮"
    },
    {
      titulo: "Innovación Constante",
      descripcion: "Siempre buscamos nuevas formas de mejorar la experiencia de nuestros usuarios.",
      icono: "💡"
    },
    {
      titulo: "Comunidad Primero",
      descripcion: "Nuestra comunidad es el corazón de todo lo que hacemos.",
      icono: "👥"
    },
    {
      titulo: "Calidad Premium",
      descripcion: "Solo ofrecemos los mejores juegos y servicios a nuestros usuarios.",
      icono: "⭐"
    }
  ];

  const estadisticas = [
    {
      numero: "1M+",
      texto: "Usuarios Activos"
    },
    {
      numero: "500+",
      texto: "Juegos Disponibles"
    },
    {
      numero: "50+",
      texto: "Países"
    },
    {
      numero: "24/7",
      texto: "Soporte"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primario to-secundario overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-black"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              Meta Legends: Tu Portal al Mundo Gaming
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl"
            >
              Somos apasionados por los videojuegos y nuestra misión es llevar las mejores experiencias a jugadores de todo el mundo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-8">
              Meta Legends nació en 2024 con una visión clara: crear una plataforma que no solo venda juegos, sino que construya una comunidad. Desde entonces, hemos crecido hasta convertirnos en uno de los destinos preferidos para los gamers en Latinoamérica.
            </p>
            <p className="text-gray-600">
              Nuestro compromiso con la excelencia y la pasión por los videojuegos nos impulsa a mejorar constantemente, ofreciendo siempre las mejores experiencias a nuestros usuarios.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{valor.icono}</div>
                <h3 className="text-xl font-bold mb-3">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}