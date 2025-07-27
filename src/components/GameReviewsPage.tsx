import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const GameReviewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Optional: You can implement actual search logic here
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="py-12 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Review Section Box */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 text-center min-h-[400px] sm:min-h-[500px] flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Game Reviews
            </h1>

            {/* Message for No Reviews Yet */}
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-10">
              It seems we can't find what you're looking for. Perhaps searching can help.
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-0 max-w-md mx-auto w-full"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none font-medium transition-colors"
              >
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default GameReviewsPage;
