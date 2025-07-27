import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const BoardGamesArticle: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-amber-50 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                        <article>
                            <header className="mb-6 md:mb-8">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                                    Flying Chess vs. Ludo vs. Snakes & Ladders – Which is Best for Game Night?
                                </h1>
                                <div className="flex justify-center">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2016/03/27/21/16/game-1287327_1280.jpg"
                                        alt="Board Games Collection"
                                        className="w-full max-w-3xl h-auto object-cover rounded-lg"
                                    />
                                </div>
                            </header>

                            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700">
                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                                    <p>
                                        When planning family game nights or friendly gatherings, classic board games offer timeless entertainment.
                                        This article compares three popular board games — Flying Chess, Ludo, and Snakes & Ladders — to help you decide.
                                    </p>
                                </section>

                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Game Breakdown</h2>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Flying Chess</h3>
                                        <p>Flying Chess blends luck, strategy, and vibrant visuals. Players race planes to the central base.</p>
                                        <ul className="list-disc pl-5 mb-3">
                                            <li>4 players, 4 planes each</li>
                                            <li>Dice rolls, flying shortcuts</li>
                                            <li>Send opponents back by landing on their plane</li>
                                        </ul>
                                        <p className="font-medium">Best For: Competitive, fast-paced fun.</p>
                                    </article>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Ludo</h3>
                                        <p>Ludo is a classic race game with easy rules and exciting turns.</p>
                                        <ul className="list-disc pl-5 mb-3">
                                            <li>2–4 players</li>
                                            <li>Move 4 tokens home using dice rolls</li>
                                            <li>Safe zones, blocking, and chasing</li>
                                        </ul>
                                        <p className="font-medium">Best For: Family-friendly, nostalgic play.</p>
                                    </article>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Snakes & Ladders</h3>
                                        <p>A game of pure luck with no strategy required.</p>
                                        <ul className="list-disc pl-5 mb-3">
                                            <li>Roll-and-move gameplay</li>
                                            <li>Climb ladders or fall on snakes</li>
                                            <li>Perfect for kids or casual fun</li>
                                        </ul>
                                        <p className="font-medium">Best For: Light, random fun.</p>
                                    </article>
                                </section>

                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comparison Table</h2>
                                    <div className="overflow-x-auto mb-6">
                                        <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 border-b text-left font-medium text-gray-700 uppercase">Feature</th>
                                                    <th className="px-4 py-3 border-b">Flying Chess</th>
                                                    <th className="px-4 py-3 border-b">Ludo</th>
                                                    <th className="px-4 py-3 border-b">Snakes & Ladders</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">Players</td>
                                                    <td className="px-4 py-3">2–4</td>
                                                    <td className="px-4 py-3">2–4</td>
                                                    <td className="px-4 py-3">2+</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Strategy</td>
                                                    <td className="px-4 py-3">Medium</td>
                                                    <td className="px-4 py-3">Low</td>
                                                    <td className="px-4 py-3">None</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Luck</td>
                                                    <td className="px-4 py-3">Medium</td>
                                                    <td className="px-4 py-3">High</td>
                                                    <td className="px-4 py-3">Very High</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Duration</td>
                                                    <td className="px-4 py-3">15–30 mins</td>
                                                    <td className="px-4 py-3">20–40 mins</td>
                                                    <td className="px-4 py-3">10–20 mins</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Age</td>
                                                    <td className="px-4 py-3">6+</td>
                                                    <td className="px-4 py-3">5+</td>
                                                    <td className="px-4 py-3">4+</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
                                    <p>
                                        Whether you choose Flying Chess, Ludo, or Snakes & Ladders, each game brings joy, laughs, and friendly rivalry.
                                        Try all three and see which your group enjoys most!
                                    </p>
                                </section>

                                <aside className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                                    <p className="text-orange-800 font-medium">
                                        <Link to="/ai-gaming-2025" className="underline hover:text-orange-900">
                                            Recommended: How AI is Changing the Way We Play Games in 2025
                                        </Link>
                                    </p>
                                </aside>
                            </div>
                        </article>

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                            <button
                                onClick={() => navigate('/guides/best-strategy-games')}
                                className="text-orange-500 hover:text-orange-600 transition-colors text-base font-semibold"
                            >
                                ← Previous Post
                            </button>
                            <button
                                onClick={() => navigate('/article-detail/2')}
                                className="text-orange-500 hover:text-orange-600 transition-colors text-base font-semibold"
                            >
                                Next Post →
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BoardGamesArticle;
