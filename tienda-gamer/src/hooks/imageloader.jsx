// src/hooks/useImageLoader.js
import { useState, useEffect } from 'react';

export function useImageLoader(imagePath) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setError('Error al cargar la imagen');
  }, [imagePath]);

  return { imageLoaded, error };
}