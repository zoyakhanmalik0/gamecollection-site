import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// ✅ Updated trending games list
const games: string[] = [
  'Teen Patti',
  'Carrom Pool',
  'Dragon Tiger',
  'Ludo Star',
  'Sniper 3D',
  'Free Fire Max',
  'Real Cricket 22',
  'Subway Surfers',
  'Hill Climb Racing',
  '8 Ball Pool',
  'My Talking Angela',
];

const Trending: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = games.filter((game) =>
      game.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center min-h-[500px] flex flex-col justify-center">
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Pakistan’s Top Trending Games
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-10">
              Explore the most played and loved mobile games in Pakistan. Search to find your favorite!
            </p>

            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row justify-center items-stretch gap-2 sm:gap-0 max-w-md mx-auto w-full"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search popular games..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none font-medium transition-colors"
              >
                SEARCH
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              Try searching for: <span className="text-orange-500">Teen Patti</span>,{' '}
              <span className="text-orange-500">Ludo Star</span>,{' '}
              <span className="text-orange-500">Dragon Tiger</span>
            </div>

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
                  No games found for "{searchTerm}"
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trending;
