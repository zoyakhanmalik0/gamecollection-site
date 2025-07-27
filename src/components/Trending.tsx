import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// ✅ Define game list as a typed array
const games: string[] = [
  'PUBG Mobile',
  'Free Fire',
  'Ludo Star',
  'Call of Duty: Mobile',
  'Candy Crush Saga',
  '8 Ball Pool',
  'Subway Surfers',
  'Asphalt 9: Legends',
  'Among Us',
  'Clash Royale',
  'My Talking Tom',
];

const Trending: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // ✅ Explicitly typed
  const [results, setResults] = useState<string[]>([]);

  // ✅ Handle search logic on form submit
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If input is empty, reset results
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    // ✅ Case-insensitive search
    const filtered = games.filter((game) =>
      game.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* ✅ Header component */}
      <Header />

      {/* ✅ Main search box container */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center min-h-[500px] flex flex-col justify-center">
            
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Trending Games
            </h1>

            {/* Prompt */}
            <p className="text-gray-600 text-base sm:text-lg mb-10">
              Search for popular mobile games trending in Pakistan.
            </p>

            {/* ✅ Search Input + Button */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row justify-center items-stretch gap-2 sm:gap-0 max-w-md mx-auto w-full"
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

            {/* 🔍 Sample Keywords */}
            <div className="mt-6 text-sm text-gray-500">
              Try searching for: <span className="text-orange-500">PUBG</span>,{' '}
              <span className="text-orange-500">Ludo</span>,{' '}
              <span className="text-orange-500">Candy Crush</span>
            </div>

            {/* ✅ Display Results */}
            <div className="mt-10 text-left">
              {results.length > 0 ? (
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">
                    Search Results:
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {results.map((game, index) => (
                      <li key={index}>{game}</li>
                    ))}
                  </ul>
                </div>
              ) : searchTerm ? (
                <p className="text-red-500 mt-6">
                  No results found for "{searchTerm}"
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Footer component */}
      <Footer />
    </div>
  );
};

export default Trending;
