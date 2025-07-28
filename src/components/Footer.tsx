import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Links */}
        <div className="flex justify-center mb-8">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link to="/game-guides" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Game Tutorials</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Game Opinions</Link>
            <Link to="/tip" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Hints & Tips</Link>
            <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Our Story</Link>
            <Link to="/contact" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Get in Touch</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Privacy & Policy</Link>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Join our mailing list for updates, latest content & more!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded font-semibold whitespace-nowrap transition-colors">
              Join Now
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 <span className="text-orange-600 font-medium">111 Patti Guide</span> | Crafted by <span className="text-orange-600 font-medium">11PattiGuide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
