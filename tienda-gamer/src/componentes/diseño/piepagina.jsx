// src/componentes/diseño/PiePagina.jsx
import { Link } from 'react-router-dom';

export default function PiePagina() {
  return (
    <footer className="bg-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/public/recursos/imagenes/iconos/controlador.png"
                alt="Meta Legends"
                className="h-24 w-24 rounded-full bg-primario p-2"
              />
              <span className="ml-3 text-2xl font-bold text-white">Meta Legends</span>
            </Link>
          </div>

          {/* Información Fundamental */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Información Fundamental
            </h3>
            <p className="text-gray-300 mb-2">
              Esta página está realizada con Html 5, CSS y JS todo el diseño fue elaborado por el grupo 6.
            </p>
            <p className="text-gray-300">
              Esta página tiene derechos de autor y está protegida, por este razón no se puede copiar ni modificar, gracias por seguir las reglas 😊
            </p>
            <div className="mt-4 text-gray-300">
              <p>• Términos y condiciones</p>
              <p>• Política de cookies</p>
            </div>
          </div>

          {/* Síguenos */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Síguenos
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <i className="fab fa-youtube text-white text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-white text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-white text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-600 pt-8">
          <p className="text-gray-400">
            ©2024 <span className="font-semibold">Equipo 6</span> - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}