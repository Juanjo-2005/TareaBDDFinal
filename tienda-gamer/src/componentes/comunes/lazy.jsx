// src/componentes/comunes/ImagenLazy.jsx
import { useState, useEffect } from 'react';

export default function ImagenLazy({ src, alt, className }) {
  const [imagenCargada, setImagenCargada] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!imagenCargada && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          imagenCargada ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setImagenCargada(true)}
      />
    </div>
  );
}