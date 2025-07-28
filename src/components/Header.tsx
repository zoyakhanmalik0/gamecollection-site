import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./image.jpg"; // Update path if needed

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 w-full">
      {/* Brand Section */}
      <div className="w-full border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Site Logo"
              className="w-20 sm:w-24 h-16 sm:h-20 object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Menu and Utility */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">

          {/* Main Menu */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <Link to="/game-guides" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Game Tutorials
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Game Opinions
            </Link>
            <Link to="/tip" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Hints & Tips
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Our Story
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Get in Touch
            </Link>
          </nav>

          {/* Placeholder for Search/Newsletter etc. */}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
