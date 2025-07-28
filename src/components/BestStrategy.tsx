import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const StrategyGuideArticle: React.FC = () => {
  const navigate = useNavigate();

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

            <div className="mb-8">
              <img
                src="https://www.edarabia.com/wp-content/uploads/2019/01/award-supporting-teaching-learning-238627.jpg"
                alt="Team collaboration in strategy learning"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
              />
            </div>

            <div className="text-left max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Strategy games aren't just about winning or entertainment—they are a great way to build useful life skills.
                Whether you're playing chess, digital puzzles, or family-friendly mobile games, these experiences can
                strengthen critical thinking, time management, and communication abilities.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                In this guide, we’ll explore the real-world benefits of strategy games and how they can support learning,
                decision-making, and personal growth across all age groups.
              </p>
            </div>
          </div>

          {/* Skill Sections */}
          {[
            {
              title: '1. Critical Thinking & Decision-Making',
              body:
                'Games that require careful choices help players evaluate outcomes and make smart decisions. Whether it’s a logical puzzle or a digital board game, players must think ahead and weigh their options.',
              list: [
                'Weighing pros and cons before acting',
                'Considering consequences of decisions',
              ],
              tip: 'Builds real-life problem-solving confidence',
            },
            {
              title: '2. Planning & Time Management',
              body:
                'Many games require players to think long-term, set goals, and manage limited resources. These habits translate directly into better planning in everyday life.',
              list: [
                'Setting realistic goals and tracking progress',
                'Managing tasks under time limits',
                'Staying focused on priorities',
              ],
            },
            {
              title: '3. Communication & Teamwork (Multiplayer)',
              body:
                'In multiplayer settings, strategy games encourage discussion, leadership, and cooperation. Whether online or offline, teamwork is essential to success.',
              list: [
                'Collaborating in groups at school or work',
                'Expressing thoughts clearly and calmly',
                'Handling group challenges and feedback',
              ],
            },
            {
              title: '4. Adaptability & Flexibility',
              body:
                'Strategy games often change quickly, forcing players to adjust their approach. This builds mental flexibility, especially when outcomes are unpredictable.',
              list: [
                'Responding to changes calmly',
                'Thinking on your feet',
                'Trying new approaches when things shift',
              ],
            },
            {
              title: '5. Focus & Attention to Detail',
              body:
                'Success in these games often requires staying alert, tracking actions, and noticing small clues. Players learn to filter distractions and sharpen their attention.',
              list: [
                'Better focus during work or study',
                'Tracking complex instructions',
                'Noticing patterns and solving tasks accurately',
              ],
            },
            {
              title: '6. Learning from Mistakes',
              body:
                'Losing a game can be a powerful teacher. Many strategy games encourage players to reflect, adapt, and try again — promoting persistence and growth.',
              list: [
                'Building emotional resilience',
                'Turning feedback into improvement',
                'Learning how to recover from setbacks',
              ],
            },
          ].map((section, index) => (
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
                <span className="text-gray-700 ml-2">
                  Improve focus, memory, and academic thinking
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Professionals:</span>
                <span className="text-gray-700 ml-2">
                  Boost leadership, organization, and teamwork
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Families:</span>
                <span className="text-gray-700 ml-2">
                  Enjoy meaningful play while building shared skills
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Kids:</span>
                <span className="text-gray-700 ml-2">
                  Develop thinking and problem-solving skills while playing
                </span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Even lighthearted games can support learning and mental sharpness. Strategy play is a fun and positive way to grow.
            </p>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Strategy games provide more than entertainment — they offer real opportunities for personal growth. With every match,
              puzzle, or turn, players develop cognitive skills that last far beyond the game itself.
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

export default StrategyGuideArticle;
