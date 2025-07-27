import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

// ✅ Added proper function typing for React.FC
const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    // ✅ Fixed: missing '>' in the div opening tag
    <div className="min-h-screen bg-orange-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="bg-white rounded-xl shadow-lg px-4 sm:px-6 md:px-10 py-8 sm:py-12">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Top Online Mobile Games in Pakistan (2025 Edition)
            </h1>

            {/* Hero Image */}
            <div className="mb-6 sm:mb-8">
              <div className="w-full max-w-2xl mx-auto aspect-[16/9]">
                <img
                  src="https://elements-resized.envatousercontent.com/elements-video-cover-images/4d1ca4d6-04c7-4c7a-884d-0de7c89bcfbc/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=964f87e9e0c75dd57c1d045828f96c2079d624b6b9ff71a9ec04d4876237d0d9"
                  alt="Gamer playing mobile games"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                Pakistan's mobile gaming landscape is evolving rapidly. Thanks to improved internet access,
                affordable smartphones, and a growing youth population, online games are more popular than ever.
              </p>
            </div>
          </div>

          {/* Game Sections */}
          {[
            {
              title: "1. PUBG Mobile",
              desc: "Still leading the charts in Pakistan, PUBG Mobile (PlayerUnknown's Battlegrounds) remains a fan favorite among mobile gamers.",
              points: [
                "Localized servers for better performance",
                "Active esports community",
                "Regular updates and new maps",
                "Supports Urdu language interface"
              ]
            },
            {
              title: "2. Free Fire",
              desc: "Garena Free Fire is a top competitor to PUBG, especially on low- and mid-range smartphones.",
              points: [
                "Fast-paced 10-minute matches",
                "Low device requirements",
                "Frequent tournaments and strong community"
              ]
            },
            {
              title: "3. Ludo Star",
              desc: "Based on the classic board game, Ludo Star is a favorite in many Pakistani households.",
              points: [
                "Nostalgic and familiar gameplay",
                "Social features with friends and family",
                "Simple rules and short matches"
              ]
            },
            {
              title: "4. Call of Duty: Mobile",
              desc: "COD Mobile offers a console-like shooter experience right on your mobile device.",
              points: [
                "Smooth graphics and realistic weapons",
                "Popular among competitive players",
                "Multiple game modes like Battle Royale and Team Deathmatch"
              ]
            },
            {
              title: "5. Candy Crush Saga",
              desc: "For casual players, Candy Crush Saga continues to dominate the charts.",
              points: [
                "Can be played offline",
                "Family-friendly with no age restriction",
                "Relaxing and highly addictive"
              ]
            },
            {
              title: "6. 8 Ball Pool",
              desc: "A classic pool game with millions of players globally, including in Pakistan.",
              points: [
                "Realistic physics engine",
                "Multiplayer and challenge friends",
                "Both offline and online play supported"
              ]
            },
            {
              title: "7. Subway Surfers",
              desc: "Subway Surfers is a vibrant endless runner game with wide appeal.",
              points: [
                "Easy for anyone to play",
                "Works offline",
                "Regular updates featuring new cities and themes"
              ]
            },
            {
              title: "8. Asphalt 9: Legends",
              desc: "Asphalt 9 delivers high-octane car racing with console-quality graphics.",
              points: [
                "Stunning visuals and smooth gameplay",
                "Licensed cars from top brands",
                "Supports both online and offline modes"
              ]
            }
          ].map((game, index) => (
            <section className="mb-8 sm:mb-10" key={index}>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {game.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                {game.desc}
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4">
                {game.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>
          ))}

          {/* Bonus Mentions */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Bonus Mentions:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4">
              <li><strong>Among Us</strong> – Social deduction fun that remains popular in friend groups</li>
              <li><strong>Clash Royale</strong> – Real-time strategy and card battles for competitive players</li>
              <li><strong>My Talking Tom</strong> – A hit among children and casual players</li>
            </ul>
          </section>

          {/* Final Thoughts */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              Pakistan's mobile gaming community is thriving. Whether you're into high-action shooters or casual games, there's something for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Tell us your favorite mobile game in the comments, and keep following us for more gaming updates!
            </p>
          </section>

          {/* Navigation Button */}
          <div className="flex justify-end items-center mb-4">
            <button
              onClick={() => navigate('/guides/how-to-play-111-patti')}
              className="text-orange-500 hover:text-orange-600 transition-colors text-sm sm:text-base"
            >
              Next Post →
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default App;
