import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const PattiGuideArticle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Header />

      {/* Main Content Wrapper */}
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
                alt="Team collaboration in strategy learning"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
              />
            </div>

            {/* Introduction */}
            <div className="text-left max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                When you think of video games or board games, fun and entertainment might be the first things that come to mind.
                But did you know that strategy games are actually powerful tools for developing essential life skills?
                Whether you're battling opponents in Starcraft or Civilization, playing chess, or commanding virtual armies in mobile games,
                you're unknowingly sharpening your mind and learning lessons that apply well beyond the screen.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                In this article, we'll explore the everyday skills strategy games teach — and how they benefit people of all ages.
              </p>
            </div>
          </div>

          {/* Skill Sections */}
          {[
            {
              title: '1. Critical Thinking & Decision-Making',
              body:
                'Strategy games challenge players to evaluate options and make decisions quickly and wisely. A single move in chess or a tactical misstep in a board game can determine the outcome — developing skills that are directly useful in daily life.',
              list: [
                'Evaluating pros and cons in decisions',
                'Analyzing consequences before taking action',
              ],
              tip: 'Improving your ability to solve real-life problems',
            },
            {
              title: '2. Planning & Time Management',
              body:
                'Strategic games require long-term thinking, careful planning, and multitasking. Whether managing empires or balancing resources, players develop better foresight and patience.',
              list: [
                'Setting and achieving long-term goals',
                'Managing deadlines and daily tasks',
                'Understanding delayed gratification',
              ],
            },
            {
              title: '3. Communication & Teamwork (In Multiplayer Games)',
              body:
                'Many strategy games require collaboration and leadership. Players must coordinate, share ideas, and adapt their strategies in real time with others.',
              list: [
                'Working effectively in teams (school or office)',
                'Expressing ideas clearly and concisely',
                'Managing conflicts and group dynamics',
              ],
            },
            {
              title: '4. Adaptability & Flexibility',
              body:
                'Not all plans work perfectly. Players must constantly adapt to unexpected changes — whether it’s a surprise move or a rule shift.',
              list: [
                'Staying calm during uncertainty',
                'Adapting plans quickly under pressure',
                'Welcoming new strategies and ideas',
              ],
            },
            {
              title: '5. Focus & Attention to Detail',
              body:
                'Great strategy players pay close attention to detail — tracking moves, predicting patterns, and staying focused.',
              list: [
                'Improved memory and concentration',
                'Sharper focus at work or study',
                'Spotting patterns others may miss',
              ],
            },
            {
              title: '6. Learning from Mistakes',
              body:
                'Strategy games encourage trial and error. Losing teaches more than winning. Players learn to bounce back, adapt, and improve.',
              list: [
                'Developing a growth mindset',
                'Handling failure with resilience',
                'Using past mistakes to shape future success',
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
                  Enhance planning, memory, and academic success
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Professionals:</span>
                <span className="text-gray-700 ml-2">
                  Strengthen leadership, strategic thinking, and adaptability
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Parents & Families:</span>
                <span className="text-gray-700 ml-2">
                  Enjoy fun bonding experiences that also build mental sharpness
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• Kids:</span>
                <span className="text-gray-700 ml-2">
                  Learn critical thinking skills in an engaging, playful way
                </span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Even casual games can help players develop logic, patience, and strategic awareness — all while having fun.
            </p>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Strategy games are more than entertainment — they’re mental gyms. From resource management to creative
              problem-solving, each session is a chance to improve real-world skills and unlock your cognitive potential.
            </p>
          </section>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <button
              onClick={() => navigate('/guides/how-to-play-111-patti')}
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

export default PattiGuideArticle;
