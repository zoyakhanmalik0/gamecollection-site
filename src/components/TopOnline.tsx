import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="bg-white rounded-xl shadow-lg px-4 sm:px-6 md:px-10 py-8 sm:py-12">
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Top Online Mobile Games in Pakistan (2025 Edition)
            </h1>

            <div className="mb-6 sm:mb-8">
              <div className="w-full max-w-2xl mx-auto aspect-[16/9]">
                <img
                  src="https://elements-resized.envatousercontent.com/elements-video-cover-images/4d1ca4d6-04c7-4c7a-884d-0de7c89bcfbc/video_preview/video_preview_0000.jpg?w=500"
                  alt="Mobile gaming in Pakistan"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="text-left max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                With 4G/5G penetration and an ever-growing digital youth population, Pakistan's mobile gaming scene is booming in 2025. Here's a look at the most popular mobile games shaping the industry today.
              </p>
            </div>
          </div>

          {[
            {
              title: "1. PUBG Mobile",
              desc: "PUBG Mobile has evolved with HD graphics and frequent regional events for Pakistani users.",
              points: [
                "Optimized for mid-range devices in 2025",
                "Urdu commentary in events",
                "Strong esports and college-level tournaments",
                "Upgraded anti-cheat system"
              ]
            },
            {
              title: "2. Free Fire Max",
              desc: "This upgraded version of Free Fire delivers immersive visuals without compromising performance.",
              points: [
                "Stylish avatars and weapon skins",
                "New Team Clash and Lone Wolf modes",
                "Special Ramzan and Eid events in Pakistan"
              ]
            },
            {
              title: "3. Ludo Star 2",
              desc: "Ludo Star’s sequel features voice chat, live emojis, and a ranked ladder.",
              points: [
                "Pakistani voice packs included",
                "Play with local or global players",
                "In-app gifting for friends"
              ]
            },
            {
              title: "4. Call of Duty: Mobile",
              desc: "With new seasons dropping regularly, COD Mobile remains a top-tier FPS for Pakistani players.",
              points: [
                "Zombies mode reintroduced",
                "Desi skins and weapon packs",
                "Popular in university gaming lounges"
              ]
            },
            {
              title: "5. Candy Crush Saga",
              desc: "Still a favorite among families, Candy Crush's bite-sized levels keep it evergreen.",
              points: [
                "New weekly levels",
                "Pakistani holiday-themed boards",
                "Rewards for daily logins"
              ]
            },
            {
              title: "6. 8 Ball Pool",
              desc: "Miniclip’s pool game is a go-to for casual gamers and competitive play alike.",
              points: [
                "Voice chat during matches",
                "Pakistan-only tournaments with prizes",
                "Smooth controls and trick shot practice mode"
              ]
            },
            {
              title: "7. Subway Surfers",
              desc: "Now featuring Karachi and Lahore in its 2025 world tour, this classic endless runner gets a local twist.",
              points: [
                "Colorful Pakistani-themed outfits",
                "Offline play supported",
                "Frequent seasonal events"
              ]
            },
            {
              title: "8. Asphalt 9: Legends",
              desc: "Top racing game with jaw-dropping graphics and an expanding car list.",
              points: [
                "Local multiplayer events",
                "Optimized for 90Hz displays",
                "Offline career mode available"
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

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Bonus Mentions:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 ml-4">
              <li><strong>Clash of Clans</strong> – Still huge in Pakistani villages and towns</li>
              <li><strong>My Talking Angela 2</strong> – Popular among children with new local costumes</li>
              <li><strong>Dragon Tiger</strong> – Fast-paced card game gaining traction in 2025</li>
            </ul>
          </section>

          <section className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
              Whether you're a competitive player or a casual gamer, Pakistan's mobile game choices have never been richer. Stay tuned to discover the next viral hit!
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Comment your favorite game below and share with fellow gamers!
            </p>
          </section>

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
