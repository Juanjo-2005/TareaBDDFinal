// src/componentes/tienda/TarjetaProducto.jsx
export default function TarjetaProducto({ producto, onAddToCart }) {
    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(price);
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={producto.imagen}
          alt={producto.titulo}
          className="w-full h-48 object-cover"
        />
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-center">
            {producto.titulo}
          </h3>
          
          <p className="text-center text-xl font-bold text-primario mb-4">
            {formatPrice(producto.precio)}
          </p>
          
          <button
            onClick={onAddToCart}
            className="w-full bg-primario text-white py-2 px-4 rounded hover:bg-primario/90 transition-colors"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    );
  }