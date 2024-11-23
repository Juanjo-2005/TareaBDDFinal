// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authcontext';
import { CartProvider } from './contexts/carrito';
import { useEffect } from 'react';
import Disposicion from './componentes/diseño/disposicion';
import Inicio from './paginas/inicio';
import Login from './paginas/login';
import Registro from './paginas/registro';
import Tienda from './paginas/tienda';
import Perfil from './paginas/perfil';
import Descubre from './paginas/descubre';
import Conocenos from './paginas/conocenos';
import RutaProtegida from './componentes/comunes/rutaprotegida';
import { setupCollectChat } from './utils/setupchat';

function App() {
  useEffect(() => {
    setupCollectChat();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Disposicion />}>
              <Route index element={<Inicio />} />
              <Route path="login" element={<Login />} />
              <Route path="registro" element={<Registro />} />
              <Route path="tienda" element={<Tienda />} />
              <Route path="perfil" element={
                <RutaProtegida>
                  <Perfil />
                </RutaProtegida>
              } />
              <Route path="descubre" element={<Descubre />} />
              <Route path="conocenos" element={<Conocenos />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;