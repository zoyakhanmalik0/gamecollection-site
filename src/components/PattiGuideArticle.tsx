import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PattiGuideArticle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-50 min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-tight">
            How to Play 111 Patti for Beginners – Complete Rules Explained
          </h1>

          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpKLWXs4U_kNstKgNR7a3imy8ZrN2KSxRgOX0I_nDRDV4nly6kSsKzZqiuMx3wZRW-JE&usqp=CAU"
              alt="111 Patti Card Game"
              className="w-full max-w-3xl h-auto object-cover rounded-lg shadow"
            />
          </div>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800">
            <p>111 Patti is a fun and easy card game to enjoy with friends and family. Rooted in traditional culture, it has evolved into a popular game played both offline and online.</p>

            <p>In this guide, we'll explain the complete rules, card rankings, and gameplay of 111 Patti – perfect for beginners.</p>

            <h2>What is 111 Patti?</h2>
            <p>111 Patti is a three-card game inspired by classic card strategies.</p>
            <ul>
              <li>It's a game of skill and strategy</li>
              <li>Can be played offline or online</li>
              <li>Commonly played with 3 to 6 players</li>
            </ul>

            <h2>What You Need to Start</h2>
            <ul>
              <li>A standard 52-card deck (no jokers)</li>
              <li>3–6 players</li>
              <li>Play tokens or points to keep score</li>
            </ul>

            <h2>Game Flow: Step-by-Step</h2>
            <h3>1. Start Round</h3>
            <p>All players contribute an equal starting amount of tokens or points to begin the round.</p>

            <h3>2. Dealing Cards</h3>
            <p>Each player receives 3 face-down cards.</p>
            <p><strong>Seen Player:</strong> Checks cards before playing</p>
            <p><strong>Blind Player:</strong> Plays without viewing cards</p>

            <h3>3. Rounds Begin</h3>
            <ul>
              <li><strong>Call:</strong> Match the point value</li>
              <li><strong>Chaal:</strong> Raise or continue</li>
              <li><strong>Fold:</strong> Exit the round</li>
            </ul>
            <p>Blind: Must play double the current point amount</p>
            <p>Seen: Play equal to the current point amount</p>

            <h3>4. Showdown</h3>
            <p>With 2 players left, a "Show" determines the winner based on cards.</p>

            <h2>111 Patti Hand Rankings (High to Low)</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Rank</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Hand</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium text-blue-600">1</td>
                    <td className="px-4 py-2">Trail / Trio</td>
                    <td className="px-4 py-2">Three of a kind</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium text-blue-600">2</td>
                    <td className="px-4 py-2">Pure Sequence</td>
                    <td className="px-4 py-2">Three consecutive cards of same suit</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium text-blue-600">3</td>
                    <td className="px-4 py-2">Sequence</td>
                    <td className="px-4 py-2">Three consecutive cards of any suit</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium text-blue-600">4</td>
                    <td className="px-4 py-2">Color</td>
                    <td className="px-4 py-2">Three cards of same suit</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium text-blue-600">5</td>
                    <td className="px-4 py-2">Pair</td>
                    <td className="px-4 py-2">Two cards of same rank</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-medium text-blue-600">6</td>
                    <td className="px-4 py-2">High Card</td>
                    <td className="px-4 py-2">No combinations – highest card wins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Pro Tips for Beginners</h2>
            <ul>
              <li>Start blind to understand the flow</li>
              <li>Watch other players' actions</li>
              <li>Don’t bluff unless confident</li>
              <li>Practice offline first</li>
              <li>Always play for fun and learning</li>
            </ul>

            <h2>Is 111 Patti Safe to Play?</h2>
            <p>Yes, when played casually with friends and family. It helps improve:</p>
            <ul>
              <li>Strategic thinking</li>
              <li>Memory and focus</li>
              <li>Social bonding</li>
            </ul>

            <h2>Where to Practice?</h2>
            <p>You can find free apps or use physical cards to practice and improve.</p>

            <h2>Final Thoughts</h2>
            <p>111 Patti is more than just a game – it’s a fun way to engage socially and boost brain power with friends.</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
            <button
              onClick={() => navigate('/guides/top-online-mobile-games')}
              className="text-orange-600 hover:text-orange-700 transition text-sm sm:text-base font-medium"
            >
              ← Previous Post
            </button>
            <button
              onClick={() => navigate('/guides/best-strategy-games')}
              className="text-orange-600 hover:text-orange-700 transition text-sm sm:text-base font-medium"
            >
              Next Post →
            </button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PattiGuideArticle;
