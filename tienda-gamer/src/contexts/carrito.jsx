import React, { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axiosClient from '../config/axios';
import { useAuth } from './authcontext';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  // Cargar carrito al iniciar o cuando cambia la autenticación
  useEffect(() => {
    const fetchCart = async () => {
      if (isAuthenticated) {
        try {
          const { data } = await axiosClient.get('/cart');
          setCart(data.items || []);
        } catch (error) {
          console.error('Error al cargar el carrito:', error);
        }
      } else {
        setCart([]);
      }
      setLoading(false);
    };

    fetchCart();
  }, [isAuthenticated]);

  const addToCart = async (product) => {
    try {
      const { data } = await axiosClient.post('/cart/items', {
        productId: product.id,
        titulo: product.titulo,
        imagen: product.imagen,
        precio: product.precio
      });

      setCart(data.items);

      await Swal.fire({
        icon: 'success',
        title: 'Añadido al carrito',
        text: `${product.titulo} se ha añadido al carrito`,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al añadir al carrito'
      });
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const { data } = await axiosClient.delete(`/cart/items/${productId}`);
      setCart(data.items);
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al eliminar del carrito'
      });
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const { data } = await axiosClient.put(`/cart/items/${productId}`, {
        quantity: newQuantity
      });
      setCart(data.items);
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al actualizar cantidad'
      });
    }
  };

  const clearCart = async () => {
    try {
      const { data } = await axiosClient.delete('/cart');
      setCart(data.items || []);
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al limpiar el carrito'
      });
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  const getItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemsCount
  };

  if (loading) {
    return <div>Cargando...</div>; // Puedes crear un componente de loading más elaborado
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};