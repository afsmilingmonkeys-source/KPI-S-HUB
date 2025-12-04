import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50 flex items-center px-6 lg:px-10 transition-all duration-300">
      <div className="flex items-center">
        {/* 
          INSTRUCCIONES:
          Para visualizar el logo original:
          1. Renombra tu archivo de imagen a "logo.png"
          2. Asegúrate de que esté en la carpeta pública del proyecto
        */}
        <img 
          src="/logo.png" 
          alt="Dentalgy OS" 
          className="h-10 w-auto object-contain" // Ajustado a h-10 para mantener proporciones elegantes
        />
      </div>
      
      {/* Minimal User Area */}
      <div className="ml-auto flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer border border-gray-200"></div>
      </div>
    </header>
  );
};

export default Header;