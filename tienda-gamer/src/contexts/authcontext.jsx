import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosClient from '../config/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axiosClient.post('/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);

      await Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente'
      });

      navigate('/');
      return true;
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Error al iniciar sesión'
      });
      return false;
    }
  };

  const logout = async () => {
    const result = await Swal.fire({
      icon: 'info',
      title: 'Cerrar Sesión',
      text: '¿Estás seguro de que quieres cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Si, Cerrar Sesión',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      
      await Swal.fire({
        icon: 'success',
        title: 'Sesión Cerrada',
        text: 'Has cerrado sesión correctamente'
      });
      
      navigate('/');
    }
  };

  const register = async (userData) => {
    try {
      await axiosClient.post('/auth/register', userData);

      await Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada correctamente'
      });

      navigate('/login');
      return true;
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Error al registrar usuario'
      });
      return false;
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const { data } = await axiosClient.put('/auth/profile', profileData);
      
      const updatedUser = {
        ...user,
        nombre: profileData.nombre
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      await Swal.fire({
        icon: 'success',
        title: 'Perfil Actualizado',
        text: 'Los cambios se han guardado correctamente'
      });

      return true;
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Error al actualizar perfil'
      });
      return false;
    }
  };

  const deleteAccount = async () => {
    try {
      await axiosClient.delete('/auth/profile');
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);

      await Swal.fire({
        icon: 'success',
        title: 'Cuenta Eliminada',
        text: 'Tu cuenta ha sido eliminada correctamente'
      });

      navigate('/');
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Error al eliminar cuenta'
      });
    }
  };

  const value = {
    user,
    login,
    logout,
    register,
    updateProfile,
    deleteAccount,
    loading,
    isAuthenticated: !!user
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};