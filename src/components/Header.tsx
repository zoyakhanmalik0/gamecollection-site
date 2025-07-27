import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image.jpg'; // Make sure image.jpg is in the correct folder

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b border-orange-200 w-full z-10">
      {/* Top Logo Section */}
      <div className="w-full bg-gradient-to-r from-orange-200 via-yellow-100 to-pink-100 border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-1 bg-white rounded-full shadow-md hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="Logo"
                className="w-20 sm:w-24 h-16 sm:h-20 object-contain rounded-full"
              />
            </div>
            {/* Optional: Add text next to logo */}
            {/* <span className="text-xl font-bold text-orange-700 hidden sm:inline">GameVerse</span> */}
          </Link>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <Link to="/game-guides" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold">
              Strategy Guides
            </Link>
            <Link to="/reviews" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold">
              Expert Reviews
            </Link>
            <Link to="/tips" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold">
              Pro Tips
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold">
              Our Mission
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold">
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
