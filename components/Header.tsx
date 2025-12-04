import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 flex items-center px-6 lg:px-8">
      <div className="flex items-center gap-3">
        {/* Minimalist Tooth Icon */}
        <div className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12.0002 2C15.0002 2 17.5002 3.5 18.5002 6C19.5002 8.5 19.0002 11 18.5002 13C18.0002 15 16.5002 17 16.0002 18.5C15.5002 20 16.0002 21.5 16.5002 22C15.0002 22.5 13.5002 22 13.0002 21C12.5002 20 12.0002 19 12.0002 19C12.0002 19 11.5002 20 11.0002 21C10.5002 22 9.00025 22.5 7.50025 22C8.00025 21.5 8.50025 20 8.00025 18.5C7.50025 17 6.00025 15 5.50025 13C5.00025 11 4.50025 8.5 5.50025 6C6.50025 3.5 9.00025 2 12.0002 2Z" 
            />
          </svg>
        </div>
        <span className="font-medium text-lg text-black tracking-tight">
          Dentalgy <span className="font-light text-gray-400">OS</span>
        </span>
      </div>
      
      {/* Minimal User Area */}
      <div className="ml-auto flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"></div>
      </div>
    </header>
  );
};

export default Header;