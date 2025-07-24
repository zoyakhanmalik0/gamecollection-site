import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticlePage = () => {
  const { id } = useParams();

  // Article data - in a real app, this would come from an API or database
  const articles = {
    '1': {
      title: "Top Online Mobile Games in Pakistan (2025 Edition)",
      date: "December 10, 2023",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: {
        intro: "Pakistan's mobile gaming landscape is growing rapidly, and the range of top online games available has expanded significantly. With improved internet access, affordable smartphones, and a young population eager for digital entertainment, online mobile games have become a popular pastime for millions. Whether you're looking for action-packed adventures, strategic challenges, or casual fun, there's something for everyone. In this article, we explore the top online mobile games currently trending in Pakistan.",
        games: [
          {
            title: "1. PUBG Mobile",
            description: "Still leading the charts in Pakistan's Video Mobile Playerunknown's Battlegrounds) continues to be a fan favorite. This battle royale game offers intense multiplayer action, where players fight to be the last one standing.",
            features: [
              "Loved servers for better performance",
              "Active esports community",
              "Regular updates and events",
              "Multiple game language interface"
            ]
          },
          {
            title: "2. Free Fire",
            description: "Garena Free Fire is a strong competitor to PUBG, especially on low- and mid-range smartphones. With shorter matches and smooth gameplay, it's a go-to for many Pakistani gamers.",
            features: [
              "Fast-paced 10-minute matches",
              "Low device requirements",
              "Good tournaments and social communities"
            ]
          },
          {
            title: "3. Ludo King",
            description: "Based on the classic board game, Ludo Star has become a favorite in Pakistan households. It's easy to learn and perfect for playing with friends or family.",
            features: [
              "Nostalgic gameplay",
              "Great social aspect",
              "Multiple friends and voice chat features"
            ]
          },
          {
            title: "4. Call of Duty: Mobile",
            description: "COD Mobile delivers a console-like shooter experience on mobile, offering a mix of multiplayer and battle royale modes.",
            features: [
              "Smooth graphics and realistic weapons",
              "Popular with competitive gamers",
              "Regular seasonal updates"
            ]
          },
          {
            title: "5. Candy Crush Saga",
            description: "For casual gamers, Candy Crush Saga remains one of the most downloaded games. Its simple mechanics and addictive levels make it a favorite across all age groups.",
            features: [
              "Offline gameplay mode",
              "No Age limit",
              "Simple and engaging"
            ]
          },
          {
            title: "6. 8 Ball Pool",
            description: "With millions of players globally, 8 Ball Pool has a solid player base in Pakistan. It offers smooth multiplayer matches and competitive rankings.",
            features: [
              "Realistic physics",
              "Social features like friend challenges",
              "Available in offline and online modes"
            ]
          },
          {
            title: "7. Subway Surfers",
            description: "This endless runner game by Kiloo, Subway Surfers is an endless runner game that offers hours of entertainment and colorful visuals.",
            features: [
              "Easy to pick up and play",
              "Offline access",
              "Regular updates with new cities"
            ]
          },
          {
            title: "8. Asphalt 9: Legends",
            description: "Asphalt 9 brings high-octane car racing to your mobile phone. It's a go-to game for racing fans in Pakistan.",
            features: [
              "Stunning graphics",
              "Multiplayer from top brands",
              "Online competitions"
            ]
          }
        ],
        bonusMentions: [
          "Among Us - Social deduction fun, still popular in casual groups",
          "Clash of Clans - Strategy gaming remains an evergreen gaming force",
          "My Talking Tom - Loved by kids for wholesome"
        ],
        conclusion: "Pakistan's mobile gaming audience is growing rapidly, and the range of top online games available has expanded significantly. With improved internet access, affordable smartphones, and a young population eager for digital entertainment, online mobile games are now part of daily life. Whether you're a hardcore gamer or just looking to kill time, these trending mobile games offer quality entertainment with a tap of your screen.\n\nLet us know your favorite mobile game in the comments, and stay tuned for our blog for more gaming content!"
      }
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
            <p className="text-gray-500 mb-6">{article.date}</p>
            
            {/* Introduction */}
            <p className="text-gray-700 leading-relaxed mb-8">{article.content.intro}</p>
            
            {/* Games List */}
            <div className="space-y-8">
              {article.content.games.map((game, index) => (
                <div key={index} className="border-l-4 border-orange-500 pl-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{game.title}</h2>
                  <p className="text-gray-700 mb-4">{game.description}</p>
                  <ul className="space-y-2">
                    {game.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Bonus Mentions */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Bonus Mentions:</h2>
              <ul className="space-y-2">
                {article.content.bonusMentions.map((mention, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="text-gray-700">{mention}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Final Thoughts */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content.conclusion}</p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex space-x-4">
              <img 
                src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Related post"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">How to Play Hi Tech for Beginners</h3>
                <p className="text-sm text-gray-600">Learn the basics of Hi Tech gaming with our comprehensive guide.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;