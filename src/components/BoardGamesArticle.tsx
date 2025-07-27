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
                                        src="https://media.istockphoto.com/id/471295821/photo/multiple-board-games-and-pieces.jpg?s=612x612&w=0&k=20&c=m0JPNo2yYIYaTLRQkRxBwYDL5SHYebGbCy_5wc_WpDg="
                                        alt="Board Games Collection"
                                        className="w-full max-w-3xl h-auto object-cover rounded-lg"
                                    />
                                </div>
                            </header>

                            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700">
                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                                    <p>
                                        Planning a family game night? Classic board games are a great way to bond and enjoy quality time.
                                        Let’s compare Flying Chess, Ludo, and Snakes & Ladders to help you pick the perfect one!
                                    </p>
                                </section>

                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Game Breakdown</h2>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Flying Chess: A Race with a Twist</h3>
                                        <p>
                                            Flying Chess, or Aeroplane Chess, is a vibrant and exciting race-style board game.
                                            Each player controls four planes, aiming to fly all of them to the finish point before others.
                                        </p>
                                        <ul className="list-disc pl-5 mb-3 space-y-1">
                                            <li>2 to 4 players with colorful plane pieces</li>
                                            <li>Includes shortcuts and safe spots</li>
                                            <li>Simple dice mechanics, moderate planning</li>
                                            <li>Great visual appeal and pace</li>
                                        </ul>
                                        <p className="font-medium">Best For: Fast-paced, family-friendly fun with light strategy.</p>
                                    </article>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Ludo: The Classic Family Favorite</h3>
                                        <p>
                                            Ludo is a timeless classic where players race tokens from start to finish.
                                            It’s based on Pachisi and features simple dice rolling and token movement.
                                        </p>
                                        <ul className="list-disc pl-5 mb-3 space-y-1">
                                            <li>2 to 4 players, each with 4 tokens</li>
                                            <li>Safe zones and blocking strategies add depth</li>
                                            <li>Popular in both physical and digital forms</li>
                                            <li>Easy to learn and enjoy for all ages</li>
                                        </ul>
                                        <p className="font-medium">Best For: Nostalgic gameplay and easy rules that appeal to everyone.</p>
                                    </article>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Snakes & Ladders: Pure Dice-Based Fun</h3>
                                        <p>
                                            In Snakes & Ladders, players roll dice and move along a numbered board,
                                            climbing ladders or sliding down snakes based on their luck.
                                        </p>
                                        <ul className="list-disc pl-5 mb-3 space-y-1">
                                            <li>Basic gameplay, perfect for young kids</li>
                                            <li>No strategy involved—just roll and move</li>
                                            <li>Games are short and exciting</li>
                                            <li>Perfect for quick and light sessions</li>
                                        </ul>
                                        <p className="font-medium">Best For: Relaxed fun and teaching numbers to children.</p>
                                    </article>
                                </section>

                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comparison: Which Game Suits Your Game Night?</h2>
                                    <div className="overflow-x-auto mb-6">
                                        <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 border-b text-left font-medium text-gray-700 uppercase">Feature</th>
                                                    <th className="px-4 py-3 border-b text-left font-medium text-gray-700 uppercase">Flying Chess</th>
                                                    <th className="px-4 py-3 border-b text-left font-medium text-gray-700 uppercase">Ludo</th>
                                                    <th className="px-4 py-3 border-b text-left font-medium text-gray-700 uppercase">Snakes & Ladders</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Players</td>
                                                    <td className="px-4 py-3">2–4</td>
                                                    <td className="px-4 py-3">2–4</td>
                                                    <td className="px-4 py-3">2+</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Strategy Required</td>
                                                    <td className="px-4 py-3">Moderate</td>
                                                    <td className="px-4 py-3">Basic</td>
                                                    <td className="px-4 py-3">None</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Luck Factor</td>
                                                    <td className="px-4 py-3">Medium</td>
                                                    <td className="px-4 py-3">High</td>
                                                    <td className="px-4 py-3">Very High</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Game Duration</td>
                                                    <td className="px-4 py-3">15–30 mins</td>
                                                    <td className="px-4 py-3">20–40 mins</td>
                                                    <td className="px-4 py-3">10–20 mins</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Online Versions</td>
                                                    <td className="px-4 py-3">Available</td>
                                                    <td className="px-4 py-3">Very Popular</td>
                                                    <td className="px-4 py-3">Available</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Age Suitability</td>
                                                    <td className="px-4 py-3">6+</td>
                                                    <td className="px-4 py-3">5+</td>
                                                    <td className="px-4 py-3">4+</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Choosing the Right Game</h3>
                                        <div className="space-y-3">
                                            <p><strong>Flying Chess:</strong> Great for those who enjoy action with a bit of planning.</p>
                                            <p><strong>Ludo:</strong> Ideal for those seeking simple, nostalgic fun.</p>
                                            <p><strong>Snakes & Ladders:</strong> Perfect for light-hearted play with kids or quick sessions.</p>
                                        </div>
                                    </article>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                        <p className="text-sm text-yellow-700">
                                            🧠 <strong>Pro Tip:</strong> Play one round of each and let your group pick their favorite!
                                        </p>
                                    </div>
                                </section>

                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
                                    <p>
                                        No matter which game you choose, you're set for a fun, engaging evening.
                                        Whether you're in the mood for excitement, nostalgia, or pure fun — there's a board game ready for you.
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
                                onClick={() => navigate('/guides/ai-in-gaming')}
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
