// src/paginas/Inicio.jsx
import Bienvenida from '../componentes/diseño/bienvenida';
import CarruselJuegos from '../componentes/juegos/CarruselJuegos';
import ListaJuegos from '../componentes/juegos/ListaJuegos';

export default function Inicio() {
  return (
    <div className="min-h-screen">
      <Bienvenida />
      
      <div className="container mx-auto px-4 py-12">
        <CarruselJuegos />
        <ListaJuegos />
      </div>
    </div>
  );
}