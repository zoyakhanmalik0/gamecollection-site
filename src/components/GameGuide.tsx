import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
};

const GameGuides: React.FC = () => {
  const articles: Article[] = [
    {
      id: 'strategy-card-basics',
      title: 'How to Play 111 Patti for Beginners - Complete Rules Explained',
      excerpt: '111 Patti is a fun card game known for its simplicity and strategic play. Learn the basic rules in this beginner-friendly guide...',
      image: 'https://media.assettype.com/homegrown%2F2024-10-18%2Fzty8rusu%2FWhatsApp-Image-2024-10-17-at-4.09.08-PM.jpeg?w=480&auto=format%2Ccompress&fit=max'
    },
    {
      id: 'flying-chess-vs-ludo',
      title: 'Flying Chess vs. Ludo vs. Snakes & Ladders - Which is Best for Game Night?',
      excerpt: 'When it comes to family fun or casual play, classic board games like Flying Chess and Ludo never go out of style. Here’s a fun comparison...',
      image: 'https://media.istockphoto.com/id/471295821/photo/multiple-board-games-and-pieces.jpg?s=612x612&w=0&k=20&c=m0JPNo2yYIYaTLRQkRxBwYDL5SHYebGbCy_5wc_WpDg='
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
      <Header />

      <main className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            Game Guides
          </h1>

          <div className="space-y-16 sm:space-y-20">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="w-full flex justify-center p-4 sm:p-6 lg:p-8">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full max-w-4xl h-60 sm:h-96 lg:h-[36rem] object-cover rounded-xl"
                  />
                </div>

                <div className="px-6 sm:px-8 lg:px-10 pb-10 sm:pb-12">
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 hover:text-red-600 transition-colors">
                    <Link to={`/guides/${article.id}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/guides/${article.id}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors text-base sm:text-lg"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameGuides;

