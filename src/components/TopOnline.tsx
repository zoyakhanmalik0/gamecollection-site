import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function App() {
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

                        {/* Hero Image */}
                        <div className="mb-6 sm:mb-8">
                            <div className="w-full max-w-2xl mx-auto aspect-[16/9]">
                                <img
                                    src="https://media.istockphoto.com/id/1586683247/photo/caucasian-young-streamer-boy-and-asian-influencer-girl-playing-video-game-online-while.jpg?s=612x612&w=0&k=20&c=5S0oPb9t8GD5vWieneiSLQcFkiy4TQSeWL4ISVgEdLs="
                                    alt="Gamer playing mobile games"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        {/* Introduction */}
                        <div className="text-left max-w-3xl mx-auto">
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                                Pakistan's mobile gaming landscape is growing rapidly, and the range of top online games
                                available to Pakistani players has never been more diverse. With improved mobile
                                internet access, affordable smartphones, and a rising population eager for digital
                                entertainment, online mobile games have become a popular pastime for millions...
                            </p>
                        </div>
                    </div>

                    {/* Game Sections */}
                    {[
                        {
                            title: "1. PUBG Mobile",
                            desc: "Still leading the charts in Pakistan's video Mobile PlayerUnknown's Battlegrounds) continues to be a fan favourite.",
                            points: [
                                "Loved servers for better performance",
                                "Active esports community",
                                "Regular updates and new maps",
                                "Supports Urdu language interface"
                            ]
                        },
                        {
                            title: "2. Free Fire",
                            desc: "Garena Free Fire is a strong competitor to PUBG, especially on low- and mid-range smartphones.",
                            points: [
                                "Fast-paced 10-minute matches",
                                "Low device requirements",
                                "Good tournaments and social communities"
                            ]
                        },
                        {
                            title: "3. Ludo Star",
                            desc: "Based on the classic board game, Ludo Star has become a favourite in Pakistani households.",
                            points: [
                                "Nostalgic gameplay",
                                "Great social aspect",
                                "Simple rules and quick matches"
                            ]
                        },
                        {
                            title: "4. Call of Duty: Mobile",
                            desc: "COD Mobile delivers a console-like shooter experience on mobile.",
                            points: [
                                "Smooth graphics and realistic weapons",
                                "Popular with competitive gamers",
                                "Multiple game modes"
                            ]
                        },
                        {
                            title: "5. Candy Crush Saga",
                            desc: "For casual gamers, Candy Crush Saga remains one of the most downloaded games.",
                            points: [
                                "Offline gameplay mode",
                                "No Age limit",
                                "Relaxing and engaging"
                            ]
                        },
                        {
                            title: "6. 8 Ball Pool",
                            desc: "With millions of players globally, 8 Ball Pool has a solid player base in Pakistan.",
                            points: [
                                "Realistic physics",
                                "Social features like friend challenges",
                                "Available in offline and online modes"
                            ]
                        },
                        {
                            title: "7. Subway Surfers",
                            desc: "Subway Surfers is an endless runner game that offers hours of fun and colorful visuals.",
                            points: [
                                "Easy to pick up and play",
                                "Offline access",
                                "Regular updates with new cities"
                            ]
                        },
                        {
                            title: "8. Asphalt 9: Legends",
                            desc: "Asphalt 9 brings high-octane car racing to your mobile phone.",
                            points: [
                                "Stunning graphics",
                                "Multiplayer from top brands",
                                "Online and offline modes"
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
                            <li><strong>Among Us</strong> – Social deduction fun, still popular in casual groups</li>
                            <li><strong>Clash Royale</strong> – Strategy-based card game with incredible gameplay</li>
                            <li><strong>My Talking Tom</strong> – Loved by kids and families</li>
                        </ul>
                    </section>

                    {/* Final Thoughts */}
                    <section className="mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Final Thoughts
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                            Pakistan's mobile gaming audience is growing rapidly. Whether you're into competitive
                            shooters or casual puzzle games, there's something for everyone.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Let us know your favorite mobile game in the comments, and stay tuned for our blog for more
                            gaming content!
                        </p>
                    </section>

                    {/* Navigation Button */}
                    <div className="flex justify-end items-center mb-4">
                        <button
                            onClick={() => navigate('/guides/strategy-card-basics')}
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
}

export default App;
