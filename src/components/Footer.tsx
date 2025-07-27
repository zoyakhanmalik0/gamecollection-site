import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {/* ✅ Corrected paths to match standard route naming conventions */}
            <Link to="/game-guides" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Game Guides</Link>
            <Link to="/game-reviews" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Game Reviews</Link> {/* changed from /GameReviewPage to lowercase for consistency */}
            <Link to="/tips" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Tips & Tricks</Link> {/* changed from /tippage to /tips for clarity */}
            <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors text-sm">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Contact</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Privacy Policy</Link>
          </nav>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Sign up to receive email updates, fresh news and more!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded font-semibold whitespace-nowrap transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 <span className="text-orange-600 font-medium">111 Patti Guide</span> | Powered by <span className="text-orange-600 font-medium">11PattiGuide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
