// src/paginas/Tienda.jsx
import { useState } from 'react';
import TarjetaProducto from '../componentes/tienda/tarjetaproducto';
import CarritoCompras from '../componentes/tienda/carritocompras';

export default function Tienda() {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [productos] = useState([
    {
      id: 1,
      titulo: "Alfombrilla Gamer edición Dragón Ball",
      imagen: "/recursos/imagenes/productos/alfombrilla-gamer-goku-vs-vegeta.png",
      precio: 50000,
      stock: 10
    },
    {
      id: 2,
      titulo: "Alfombrilla Gamer edición Stitch",
      imagen: "/recursos/imagenes/productos/alfombrilla-gamer-stitch-surfing.png",
      precio: 50000,
      stock: 8
    },
    // Agregar más productos aquí
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Productos</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de productos */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <TarjetaProducto 
              key={producto.id} 
              producto={producto}
              onAddToCart={() => setCarritoVisible(true)}
            />
          ))}
        </div>

        {/* Carrito de compras */}
        <CarritoCompras 
          visible={carritoVisible}
          onClose={() => setCarritoVisible(false)}
        />
      </div>
    </div>
  );
}