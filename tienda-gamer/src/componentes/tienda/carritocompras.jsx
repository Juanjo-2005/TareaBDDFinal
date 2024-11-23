// src/componentes/tienda/CarritoCompras.jsx
import { useState } from 'react';
import { useCart } from '../../contexts/carrito';
import Swal from 'sweetalert2';
import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function CarritoCompras({ visible, onClose }) {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getTotal,
    clearCart,
    loading 
  } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = async () => {
    const result = await Swal.fire({
      title: 'Confirmar compra',
      text: `Total a pagar: ${formatPrice(getTotal())}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar Compra',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      setIsProcessing(true);
      try {
        // Aquí iría la lógica de procesamiento de pago
        await clearCart();
        
        await Swal.fire({
          title: '¡Compra exitosa!',
          text: 'Gracias por tu compra',
          icon: 'success'
        });
        
        onClose();
      } catch (error) {
        await Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al procesar tu compra',
          icon: 'error'
        });
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleRemoveItem = async (item) => {
    const result = await Swal.fire({
      title: '¿Eliminar item?',
      text: `¿Deseas eliminar ${item.titulo} del carrito?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await removeFromCart(item.productId);
      } catch (error) {
        await Swal.fire({
          title: 'Error',
          text: 'No se pudo eliminar el item',
          icon: 'error'
        });
      }
    }
  };

  return (
    <div 
      className={`fixed right-0 top-0 h-screen w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        visible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="bg-primario text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Carrito de Compras</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-primario/80 rounded-full transition-colors"
          disabled={isProcessing}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Lista de items */}
      <div className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primario"></div>
          </div>
        ) : cart.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg mb-2">Tu carrito está vacío</p>
            <p className="text-sm">¡Agrega algunos juegos geniales!</p>
          </div>
        ) : (
          cart.map((item) => (
            <div 
              key={item.productId} 
              className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg"
            >
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.titulo}</h3>
                <p className="text-primario font-bold">
                  {formatPrice(item.precio)}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors disabled:opacity-50"
                    disabled={item.quantity <= 1 || isProcessing}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors disabled:opacity-50"
                    disabled={isProcessing}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors disabled:opacity-50"
                disabled={isProcessing}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer con total y botón de checkout */}
      {cart.length > 0 && !loading && (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="text-xl font-bold text-primario">
              {formatPrice(getTotal())}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-primario text-white py-3 rounded-lg hover:bg-primario/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </span>
            ) : (
              'Proceder al Pago'
            )}
          </button>
        </div>
      )}
    </div>
  );
}