import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Interceptor para agregar el token a las peticiones
axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;