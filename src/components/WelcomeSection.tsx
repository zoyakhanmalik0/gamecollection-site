import React from 'react';

interface Feature {
  title: string;
  content: string;
}

const WelcomeSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Easy-to-Follow Game Tutorials:',
      content:
        'Explore simple guides that teach you how to play card, board, and digital games with confidence — great for all ages.',
    },
    {
      title: 'Smart Tips & Pro Tactics:',
      content:
        'Master the game with clever tricks and smart strategies that help you level up your gameplay and decision-making.',
    },
    {
      title: 'Honest Reviews You Can Trust:',
      content:
        'We try, test, and review games so you don’t have to. Discover which titles are worth your time and attention.',
    },
    {
      title: 'Latest Trends & Launch Alerts:',
      content:
        'Be the first to know about hot new games, upcoming releases, and exciting updates across the gaming world.',
    },
    {
      title: 'Secure & Verified App Downloads:',
      content:
        'No scams, no junk — just clean, direct links to trusted games from safe sources you can rely on.',
    },
  ];

  return (
    <section className="bg-white w-full rounded-none shadow-lg overflow-hidden mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-8 md:px-16 py-8 md:py-12">
        
        {/* Left Side Text */}
        <div className="py-2 sm:py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Discover Smarter Gaming for Real Players
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Welcome to GameCollector.site
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            Dive into a world where gaming meets strategy. <span className="font-bold">gamecollector.site</span> brings you expert content — from gameplay guides to pro tips and real-game reviews. Whether you're into card games, skill games, or fun app-based games, we help you win smarter and play safer.
          </p>

          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              What You'll Find on <span className="text-yellow-600">gamecollector.site</span>
            </h3>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
              {features.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1 text-xl">•</span>
                  <span>
                    <strong>{item.title}</strong> {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex items-center justify-center h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wn51C3kn57NzuOAPJ-jblPAjRpc15hUAu77IB7eB54I7zR2m"
            alt="Illustration of board and card gaming"
            className="rounded-lg shadow-xl object-cover w-full h-full"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
