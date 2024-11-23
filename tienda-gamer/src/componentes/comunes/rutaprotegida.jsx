// src/componentes/comunes/RutaProtegida.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authcontext';
import Swal from 'sweetalert2';

export default function RutaProtegida({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesión',
        text: 'Debes iniciar sesión para acceder a esta página',
        confirmButtonText: 'Ir a Iniciar Sesión',
        showCancelButton: false,
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
}