import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image.jpg'; // ✅ Ensure this path is correct relative to the current file

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 w-full">
      {/* Logo Section */}
      <div className="w-full border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <Link to="/">
            <img
              src={logo} // ✅ TS supports static imports for images when configured correctly (e.g. with Vite or CRA)
              alt="Logo"
              className="w-20 sm:w-24 h-16 sm:h-20 object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Navigation and Search */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            {/* ✅ Route paths updated to be consistent and lowercase */}
            <Link to="/game-guides" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Game Guides
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Game Reviews
            </Link>
            <Link to="/tippage" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Tips & Tricks
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Contact
            </Link>
          </nav>

          {/* Optional: Add search or newsletter form here later */}
        </div>
      </div>
    </header>
  );
};

export default Header;
