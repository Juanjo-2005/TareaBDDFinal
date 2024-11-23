// src/componentes/diseño/Disposicion.jsx
import { Outlet } from 'react-router-dom';
import Encabezado from './encabezado';
import PiePagina from './piepagina';

export default function Disposicion() {
  return (
    <div className="flex flex-col min-h-screen">
      <Encabezado />
      <main className="flex-grow mt-nav">
        <Outlet />
      </main>
      <PiePagina />
    </div>
  );
}