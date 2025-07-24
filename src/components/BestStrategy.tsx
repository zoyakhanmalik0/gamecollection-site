import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const PattiGuideArticle = () => {
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
                                alt="People collaborating with tablet"
                                className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                            />
                        </div>

                        {/* Introduction */}
                        <div className="text-left max-w-3xl mx-auto">
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                                When you think of video games or board games, fun and entertainment might be the
                                first things that come to mind. But did you know that strategy games are actually
                                powerful tools for developing essential life skills? Whether you're battling
                                opponents in Starcraft or Civilization, overcoming chess matches, or even playing
                                smartphone opponents or commanding virtual armies in online strategy games,
                                players unknowingly sharpen their minds and apply valuable lessons that go far
                                beyond the game board or screen.
                            </p>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                                In this article, we'll explore the key everyday skills that strategy games teach and how
                                they benefit players of all ages.
                            </p>
                        </div>
                    </div>

                    {/* Sections */}
                    {[
                        {
                            title: "1. Critical Thinking & Decision-Making",
                            body: "Strategy games challenge players to think ahead, evaluate options, and make informed decisions quickly. In games like chess or board game, if a single move can determine the outcome, players develop sharp analytical skills that transfer to everyday situations.",
                            list: [
                                "Evaluating pros and cons in personal decisions",
                                "Analyzing pros and cons before key decisions"
                            ],
                            tip: "Improving problem-solving in daily life"
                        },
                        {
                            title: "2. Planning & Time Management",
                            body: "Strategic games often involve setting long-term goals, knowing when to be consider actions, and managing multiple tasks simultaneously.",
                            list: [
                                "Setting and achieving long-term goals",
                                "Managing schedules, deadlines, and multitasking",
                                "Learning patience and the value of delayed reward"
                            ]
                        },
                        {
                            title: "3. Communication & Teamwork (In Multiplayer Strategy Games)",
                            body: "Many modern strategy games involve team-based missions where players must communicate, coordinate strategies, and work together towards shared objectives. These games teach players how to collaborate effectively while also managing conflict or differing opinions.",
                            list: [
                                "Team collaboration at school or the workplace",
                                "Exercising ideas clearly and effectively",
                                "Understanding group dynamics and conflict"
                            ]
                        },
                        {
                            title: "4. Adaptability & Flexibility",
                            body: "In strategy games, the best-only plans perfectly. Players must adapt to unexpected changes, whether it's a surprise opponent move, a twist in the game's rules, or an unforeseen event.",
                            list: [
                                "Staying calm in uncertain or stressful situations",
                                "Adjusting plans when things don't go as expected",
                                "Being open to new ideas and approaches"
                            ]
                        },
                        {
                            title: "5. Focus & Attention to Detail",
                            body: "Successful strategists are detail-oriented. They spot patterns, track progress, and monitor every small move — especially in games with many layers, like technical war games or even casual ones.",
                            list: [
                                "Enhanced focus during work or study sessions",
                                "Improved memory and attention span",
                                "Noticing details others may overlook"
                            ]
                        },
                        {
                            title: "6. Learning from Mistakes",
                            body: "Games often include trial and error. Losing teaches more than winning — and most strategy games reward players who learn from failure and improve each round.",
                            list: [
                                "Building a growth mindset",
                                "Accepting failure without giving up",
                                "Applying lessons from past experiences to future challenges"
                            ]
                        }
                    ].map((section, index) => (
                        <section className="mb-10" key={index}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {section.title}
                            </h2>
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
                                <span className="text-gray-700 ml-2">Improve academic performance, planning, and focus</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">• Professionals:</span>
                                <span className="text-gray-700 ml-2">Strengthen decision-making and leadership</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">• Parents & Families:</span>
                                <span className="text-gray-700 ml-2">Bond over meaningful, brain-boosting fun</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">• Kids:</span>
                                <span className="text-gray-700 ml-2">Develop foundational thinking skills in a playful way</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Even casual games can teach young players how to think logically, stay patient, and strategize
                            in simple learning fun!
                        </p>
                    </section>

                    {/* Final Thoughts */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Final Thoughts
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Strategy games are much more than just a source of entertainment — they're training grounds for the mind. Whether
                            you're solving puzzles, managing an empire, or making moves in a fresh light, you're practicing
                            skills that matter in real life.
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
