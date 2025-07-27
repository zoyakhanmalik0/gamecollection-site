import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // TODO: Replace with actual subscription logic (e.g., API call)
    console.log('Subscribed with email:', email);
    alert('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-amber-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Links */}
        <div className="flex justify-center mb-8">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link to="/game-guides" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Strategy Center</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Game Insights</Link>
            <Link to="/tips" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Winning Moves</Link>
            <Link to="/about" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Our Vision</Link>
            <Link to="/contact" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Reach Us</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Policy & Terms</Link>
          </nav>
        </div>

        {/* Newsletter Form */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Join our newsletter for updates, pro tips & exclusive offers!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email here"
              className="w-full px-4 py-3 border border-gray-300 rounded text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded font-semibold whitespace-nowrap transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 <span className="text-orange-600 font-medium">Gaming Wisdom</span> | Crafted by <span className="text-orange-600 font-medium">GameMasterLab</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
