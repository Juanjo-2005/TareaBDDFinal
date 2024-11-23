// src/utils/setupCollectChat.js
export const setupCollectChat = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://collectcdn.com/launcher.js';
    
    // Configuración del chat
    window.CollectChatLauncher = {
      // ID de Collect.chat
      id: 'XXXXXXXXXXXXXXXX', 
      // Personalización
      customization: {
        primaryColor: '#6D28D9', // Color morado que estás usando
        welcomeMessage: '¿En que podríamos ayudarte el día de hoy?',
        initialButtons: [
          {
            text: '🎮 Recomendación de juegos',
            value: 'recomendacion'
          },
          {
            text: '🎯 Asesoramiento en algun juego en específico',
            value: 'asesoramiento'
          },
          {
            text: '🛒 Asesoramiento con los productos',
            value: 'productos'
          },
          {
            text: '🛠️ Soporte Técnico',
            value: 'soporte'
          }
        ]
      }
    };
  
    document.head.appendChild(script);
  };