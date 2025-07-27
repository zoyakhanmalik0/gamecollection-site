import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const BoardGamesArticle = () => {
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
                                        alt="Various colorful board games arranged together"
                                        className="w-full max-w-3xl h-auto object-cover rounded-lg"
                                    />
                                </div>
                            </header>

                            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700">
                                {/* Overview Section */}
                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                                    <p>
                                        When planning family game nights or friendly gatherings, classic board games offer timeless entertainment.
                                        This article compares three popular casual board games — Flying Chess, Ludo, and Snakes & Ladders — to help you choose the best fit for your game night.
                                    </p>
                                </section>

                                {/* Game Descriptions */}
                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Game Breakdown</h2>

                                    {/* Flying Chess */}
                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Flying Chess: A Race with a Twist</h3>
                                        <p>
                                            Flying Chess is a dynamic multiplayer board game blending luck and strategy.
                                            Players race colorful planes around the board aiming to reach the center first.
                                        </p>
                                        <ul className="list-disc pl-5 mb-3 space-y-1">
                                            <li>Supports up to 4 players</li>
                                            <li>Includes shortcuts and special flying routes</li>
                                            <li>Landing on an opponent's plane sends it back to base</li>
                                            <li>Light strategy mixed with chance</li>
                                        </ul>
                                        <p className="font-medium">Best For: Those who enjoy vibrant, interactive, and slightly strategic gameplay.</p>
                                    </article>

                                    {/* Ludo */}
                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Ludo: The Classic Family Favorite</h3>
                                        <p>
                                            Ludo is a simplified version of the Indian game Pachisi. Players race tokens to reach their home base using dice rolls.
                                        </p>
                                        <ul className="list-disc pl-5 mb-3 space-y-1">
                                            <li>2–4 players, straightforward rules</li>
                                            <li>Move 4 tokens from base to home</li>
                                            <li>Includes safe zones and token capturing</li>
                                            <li>Popular online versions (e.g., Ludo Star)</li>
                                        </ul>
                                        <p className="font-medium">Best For: Families or casual gamers looking for simple and familiar fun.</p>
                                    </article>

                                    {/* Snakes & Ladders */}
                                    <article className="mb-5">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Snakes & Ladders: The Game of Pure Luck</h3>
                                        <p>
                                            A game of chance, Snakes & Ladders is based entirely on dice rolls. Ladders advance you, while snakes push you back.
                                        </p>
                                        <ul className="list-disc pl-5 mb-3 space-y-1">
                                            <li>Roll-and-move mechanics</li>
                                            <li>Ideal for young children</li>
                                            <li>Fun and frustration wrapped together</li>
                                            <li>No strategy required</li>
                                        </ul>
                                        <p className="font-medium">Best For: Very young players or relaxing, no-pressure gaming.</p>
                                    </article>
                                </section>

                                {/* Comparison Table */}
                                <section className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comparison Table</h2>
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
                                                    <td className="px-4 py-3 font-medium">Strategy</td>
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
                                                    <td className="px-4 py-3 font-medium">Game Time</td>
                                                    <td className="px-4 py-3">15–30 mins</td>
                                                    <td className="px-4 py-3">20–40 mins</td>
                                                    <td className="px-4 py-3">10–20 mins</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 font-medium">Digital Versions</td>
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
                                        <p><strong>Flying Chess:</strong> For those who want a fast-paced, colorful challenge.</p>
                                        <p><strong>Ludo:</strong> A classic for families looking for tradition and simplicity.</p>
                                        <p><strong>Snakes & Ladders:</strong> Great for quick, lighthearted sessions with kids.</p>
                                    </article>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                        <p className="text-sm text-yellow-700">
                                            🧠 <strong>Pro Tip:</strong> Play all three during your next game night and let the group vote for their favorite!
                                        </p>
