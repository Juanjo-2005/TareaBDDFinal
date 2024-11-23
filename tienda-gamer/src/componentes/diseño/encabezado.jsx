// src/componentes/diseño/Encabezado.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/authcontext';
import { useCart } from '../../contexts/carrito';
import CarritoCompras from '../tienda/carritocompras';

export default function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [carritoVisible, setCarritoVisible] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { getItemsCount } = useCart();

  const enlaces = [
    { nombre: 'Descubre', ruta: '/descubre' },
    { nombre: 'Conócenos', ruta: '/conocenos' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-primario px-10 
                     flex justify-between items-center z-50 shadow-md">
      <Link to="/" className="logo flex items-center">
        <img src="/public/recursos/imagenes/logos/bienvenido a meta legends blanco slab.png" alt="Meta Legends" className="h-12 w-48" />
      </Link>

      {/* Menú escritorio */}
      <nav className="hidden lg:flex items-center gap-8">
        {enlaces.map((enlace) => (
          <Link 
            key={enlace.nombre}
            to={enlace.ruta}
            className="nav-link"
          >
            {enlace.nombre}
          </Link>
        ))}
        
        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/notificaciones">
                <img 
                  src="/public/recursos/imagenes/iconos/notificacion.png"
                  alt="Notificaciones" 
                  className="w-6 h-6"
                />
              </Link>
              
              {/* Carrito con contador */}
              <button 
                onClick={() => setCarritoVisible(true)}
                className="relative"
              >
                <ShoppingCartIcon className="w-6 h-6 text-white" />
                {getItemsCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getItemsCount()}
                  </span>
                )}
              </button>

              <div className="relative">
                <Menu>
                  <Menu.Button className="flex items-center space-x-2 text-white">
                    <img 
                      src="/public/recursos/imagenes/iconos/usuario.png"
                      alt="Perfil" 
                      className="w-6 h-6"
                    />
                    <span>{user?.nombre}</span>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/perfil"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Mi Perfil
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                        >
                          Cerrar Sesión
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link 
                to="/login"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/registro"
                className="bg-white text-primario px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Menú móvil */}
      <button 
        className="lg:hidden text-white"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      {/* Panel móvil */}
      {menuAbierto && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-primario">
          <nav className="flex flex-col p-4">
            {enlaces.map((enlace) => (
              <Link
                key={enlace.nombre}
                to={enlace.ruta}
                className="nav-link py-2"
                onClick={() => setMenuAbierto(false)}
              >
                {enlace.nombre}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/notificaciones" className="nav-link py-2">
                  Notificaciones
                </Link>
                <button 
                  onClick={() => {
                    setCarritoVisible(true);
                    setMenuAbierto(false);
                  }} 
                  className="nav-link py-2 text-left"
                >
                  Carrito ({getItemsCount()})
                </button>
                <Link to="/perfil" className="nav-link py-2">
                  Mi Perfil
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuAbierto(false);
                  }}
                  className="nav-link py-2 text-left"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="nav-link py-2"
                  onClick={() => setMenuAbierto(false)}
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/registro" 
                  className="nav-link py-2"
                  onClick={() => setMenuAbierto(false)}
                >
                  Registrarse
                </Link>
              </>
            )}
          </nav>
        </div>
      )}

      {/* Carrito lateral */}
      <CarritoCompras 
        visible={carritoVisible}
        onClose={() => setCarritoVisible(false)}
      />
    </header>
  );
}