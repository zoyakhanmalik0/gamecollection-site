import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

interface StrategySection {
  title: string;
  body: string;
  list: string[];
  tip?: string;
}

const StrategySkillsArticle: React.FC = () => {
  const navigate = useNavigate();

  const sections: StrategySection[] = [
    {
      title: "1. Critical Thinking & Decision-Making",
      body: "Strategy games challenge players to think ahead, evaluate outcomes, and make thoughtful decisions. Whether playing chess or a family-friendly board game, these activities can help sharpen decision-making skills that translate into real-world applications.",
      list: [
        "Weighing options before making personal decisions",
        "Thinking critically in time-sensitive situations"
      ],
      tip: "Boosting everyday problem-solving with structured thinking"
    },
    // Add more skill sections as needed
  ];

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Header />

      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <section className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
          {/* Article Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              How Strategy Games Teach Everyday Skills
            </h1>

            {/* Hero Image */}
            <div className="mb-8">
              <img
                src="https://www.edarabia.com/wp-content/uploads/2019/01/award-supporting-teaching-learning-238627.jpg"
                alt="People collaborating with tablet"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
              />
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md">
              <p className="text-sm text-gray-700 font-medium">
                Note: This article focuses on educational and recreational strategy games only. We do not promote real-money games, gambling, or betting.
              </p>
            </div>

            {/* Introduction */}
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Strategy games go far beyond fun—they're an engaging way to develop valuable skills for school, work, and daily life. Whether on a board or a screen, these games challenge the mind in healthy, positive ways.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                In this article, we'll explore how strategy-based games support lifelong learning through critical thinking, planning, and decision-making.
              </p>
            </div>
          </div>

          {/* Skill Sections */}
          {sections.map((section, index) => (
            <section className="mb-10" key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{section.body}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-life Application:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {section.tip && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{section.tip}</h4>
                </div>
              )}
            </section>
          ))}

          {/* Who Can Benefit */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Who Can Benefit from Strategy Games?
            </h2>
            <div className="space-y-4 text-base sm:text-lg">
              <div>
                <span className="font-semibold text-gray-900">• Students:</span>
                <span className="text-gray-700 ml-2">Build concentration, planning, and problem-solving skills</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Professionals:</span>
                <span className="text-gray-700 ml-2">Practice strategic thinking and time management</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Families:</span>
                <span className="text-gray-700 ml-2">Enjoy bonding time while boosting mental focus</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Kids:</span>
                <span className="text-gray-700 ml-2">Learn patience, pattern recognition, and logical steps</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Even simple strategy games can help younger players develop early cognitive skills in a fun and interactive way.
            </p>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Strategy games are more than a way to pass time—they're a useful tool for enhancing thinking skills, improving patience, and encouraging thoughtful decision-making. From families to professionals, these games offer benefits that extend well beyond the game board.
            </p>
          </section>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <button
              onClick={() => navigate('/guides/strategy-card-basics')}
              className="text-orange-500 hover:text-orange-600 transition-colors text-base font-semibold"
            >
              ← Previous Post
            </button>
            <button
              onClick={() => navigate('/guides/flying-chess-vs-ludo')}
              className="text-orange-500 hover:text-orange-600 transition-colors text-base font-semibold"
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

export default StrategySkillsArticle;
