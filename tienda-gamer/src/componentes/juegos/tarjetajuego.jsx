// src/componentes/juegos/TarjetaJuego.jsx
import { useState } from 'react';
import { useCart } from '../../contexts/carrito';
import { useAuth } from '../../contexts/authcontext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

export default function TarjetaJuego({ juego }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = async (e) => {
    e.stopPropagation(); // Prevenir que se abra el modal al hacer click en el botón
    
    if (!isAuthenticated) {
      const result = await Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesión',
        text: 'Debes iniciar sesión para agregar juegos al carrito',
        showCancelButton: true,
        confirmButtonText: 'Ir a Iniciar Sesión',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        window.location.href = '/login';
      }
      return;
    }

    setIsLoading(true);
    try {
      await addToCart({
        id: juego.id,
        titulo: juego.titulo,
        imagen: juego.imagen,
        precio: juego.precio
      });
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo agregar el juego al carrito'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Mapeo de IDs de video de YouTube para cada juego
  const videoIds = {
    1: "u83VdXAVq08", // Black Myth: Wukong
    2: "W6W-o_z0cdE", // Fortnite
    3: "HlfuN4yj3yg", // Star Wars Outlaws
    4: "F3jePdO9_jc", // God of War Ragnarök
    5: "MyaYlbizpvs", // Red Dead Redemption 2
    6: "C92fewrgfFw", // Resident Evil 4 Remake
    7: "CptaXqVY6-E", // Elden Ring
    8: "gdHIbPiQEQI", // Astro Bot
    9: "S6GTl_vPRvU", // Hogwarts Legacy
    10: "PMqvC507g1M", // Warhammer 40,000: Space Marine 2
    11: "QkkoHAzjnUs", // Grand Theft Auto V
    12: "lcVISRmANIo", // Overcooked 2
    13: "JGhIXLO3ul8"  // Dead by Daylight
  };

  return (
    <>
      <div 
        className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Imagen del juego */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={juego.imagen}
            alt={juego.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
            {juego.titulo}
          </h3>
        </div>

        {/* Contenido y descripción */}
        <div className="p-6">
          <div className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-96' : 'max-h-24'
          }`}>
            <h4 className="font-bold text-lg mb-2">Resumen</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {juego.descripcion}
            </p>
          </div>

          {/* Botón Ver más/menos */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mt-4 text-primario hover:text-secundario transition-colors text-sm font-semibold focus:outline-none"
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>

          {/* Precio y botón de compra */}
          <div className="mt-6">
            {juego.precio > 0 ? (
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primario">
                  {formatPrice(juego.precio)}
                </span>
                <button 
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="bg-primario text-white py-2 px-4 rounded-lg hover:bg-primario/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Agregando...
                    </span>
                  ) : (
                    'Agregar al Carrito'
                  )}
                </button>
              </div>
            ) : (
              <span className="text-2xl font-bold text-green-600">
                Free to Play
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black/80 flex items-start justify-center p-4 pt-[5vh]">
          <div className="relative bg-white rounded-xl w-full max-w-4xl my-8">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 text-white hover:text-gray-200 z-10"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Banner */}
            <div className="relative h-[200px] sm:h-[300px] rounded-t-xl overflow-hidden">
              <img
                src={juego.imagen}
                alt={juego.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              <h2 className="absolute bottom-4 left-4 text-white text-2xl sm:text-3xl font-bold">
                {juego.titulo}
              </h2>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              {/* Grid de dos columnas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  {/* Descripción */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Descripción</h3>
                    <p className="text-gray-700">{juego.descripcion}</p>
                  </div>

                  {/* Características */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">Características</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {juego.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="mb-1">{caracteristica}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Video */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Trailer</h3>
                  <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-gray-100">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoIds[juego.id]}`}
                      title={`Trailer de ${juego.titulo}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Footer con precio y botón */}
              <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                {juego.precio > 0 ? (
                  <>
                    <span className="text-2xl font-bold text-primario order-2 sm:order-1">
                      {formatPrice(juego.precio)}
                    </span>
                    <button 
                      onClick={handleAddToCart}
                      disabled={isLoading}
                      className="w-full sm:w-auto bg-primario text-white py-2 px-6 rounded-lg hover:bg-primario/90 transition-colors order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Agregando...
                        </span>
                      ) : (
                        'Agregar al Carrito'
                      )}
                    </button>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-green-600">
                    Free to Play
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}