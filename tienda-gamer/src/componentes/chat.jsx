// src/componentes/chat/ChatWidget.jsx
import { useState } from 'react';
import { XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const chatOptions = [
    {
      id: 1,
      title: 'Recomendación de juegos',
      icon: '🎮',
      response: 'Nuestro equipo te ayudará a encontrar el juego perfecto para ti.'
    },
    {
      id: 2,
      title: 'Asesoramiento en algun juego en específico',
      icon: '🎯',
      response: 'Te ayudaremos con tips y guías específicas para tu juego.'
    },
    {
      id: 3,
      title: 'Asesoramiento con los productos',
      icon: '🛒',
      response: 'Te orientaremos en tu proceso de compra.'
    },
    {
      id: 4,
      title: 'Soporte Técnico',
      icon: '🛠️',
      response: 'Nuestro equipo técnico te ayudará a resolver cualquier problema.'
    }
  ];

  const ChatButton = ({ isOpen }) => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-primario text-white flex items-center justify-center shadow-lg hover:bg-primario/90 transition-colors z-50"
    >
      <img 
        src="/public/recursos/imagenes/logos/bienvenido a meta legends blanco slab.png"
        alt="Chat"
        className="w-10 h-10 rounded-full"
      />
    </button>
  );

  return (
    <>
      <ChatButton isOpen={isOpen} />
      
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="bg-white p-4 flex items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <img 
                src="/public/recursos/imagenes/logos/bienvenido a meta legends blanco slab.png"
                alt="Meta Legends"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Meta Legends</h3>
                <p className="text-sm text-gray-500">Normalmente responde en minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  setSelectedOption(null);
                }}
                className="p-1.5 hover:bg-gray-100 rounded-full"
              >
                <ArrowPathIcon className="w-5 h-5 text-gray-500" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
            <div className="flex gap-3 mb-4">
              <img 
                src="/public/recursos/imagenes/logos/bienvenido a meta legends blanco slab.png"
                alt="Meta Legends"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                <p className="text-gray-800">
                  ¿En que podríamos ayudarte el día de hoy?
                </p>
              </div>
            </div>

            {!selectedOption ? (
              <div className="space-y-2">
                {chatOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option)}
                    className="w-full bg-white hover:bg-gray-50 text-left p-3 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-xl">{option.icon}</span>
                    <span className="text-gray-800">{option.title}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex gap-3">
                <img 
                  src="/public/recursos/imagenes/logos/bienvenido a meta legends blanco slab.png"
                  alt="Meta Legends"
                  className="w-8 h-8 rounded-full"
                />
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                  <p className="text-gray-800">
                    {selectedOption.response}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Chat ⚡ by Meta Legends</span>
              <span>Just now</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}