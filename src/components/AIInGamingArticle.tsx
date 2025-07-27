import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

type AIInGamingArticleProps = {
    onBack: () => void;
};

const AIInGamingArticle: React.FC<AIInGamingArticleProps> = ({ onBack }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] bg-fixed bg-cover flex flex-col">
            <Header />

            <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <article className="bg-white/80 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl border border-orange-100">
                    {/* Back Button */}
                    <div className="mb-6">
                        <button
                            onClick={onBack}
                            className="flex items-center text-orange-600 hover:text-orange-800 font-medium transition"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </button>
                    </div>

                    {/* Title and Meta */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            How AI Is Transforming the Gaming Landscape in 2025
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Jan 15, 2025
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Gaming Expert
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                5 min read
                            </div>
                        </div>
                    </header>

                    {/* Cover Image */}
                    <div className="mb-10">
                        <img
                            src="https://media.assettype.com/gulfnews/2025-07-10/1tvaz83t/AI-Abu-Dhabi.jpg?w=800&auto=format,compress&fit=max"
                            alt="AI Technology in Gaming"
                            className="rounded-xl shadow-md mx-auto"
                        />
                    </div>

                    {/* Introduction */}
                    <section className="mb-12 text-lg text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            Artificial Intelligence is playing a key role in the evolution of the gaming industry. By introducing adaptive gameplay, intelligent characters, and dynamic storylines, AI contributes to making digital experiences more engaging and personalized.
                        </p>
                    </section>

                    {/* Article Sections */}
                    {[
                        {
                            title: "Smarter NPCs with Personality",
                            body: "Game developers are implementing AI to improve Non-Playable Characters (NPCs), helping them respond more naturally within games. With improved memory and decision-making abilities, NPCs can provide more realistic interactions.",
                            features: [
                                "NPCs can recall previous interactions",
                                "Better emotional expressions and dialogue",
                                "Diverse player experiences through branching paths"
                            ]
                        },
                        {
                            title: "AI-Crafted Worlds & Missions",
                            body: "AI tools are being used to assist in generating game environments and missions. These tools help create varied in-game scenarios and allow for flexible story development based on player choices.",
                            features: [
                                "Procedural environment generation",
                                "Variety in quest design",
                                "Enhanced development efficiency"
                            ]
                        },
                        {
                            title: "Adaptive Gameplay Systems",
                            body: "With AI-based systems, game mechanics can adjust to how players interact. This helps create a balanced experience by adapting difficulty levels or offering relevant tips in real-time.",
                            features: [
                                "Real-time tuning of challenges",
                                "Personalized learning support",
                                "Improved pacing for better player engagement"
                            ]
                        },
                        {
                            title: "Game Development Assistance",
                            body: "AI is also being utilized during the development phase. It helps in areas like automated testing, asset creation, and performance analysis, allowing developers to optimize their workflow.",
                            features: [
                                "Early detection of common bugs",
                                "Support in asset generation",
                                "Real-time feedback analysis"
                            ]
                        }
                    ].map((section, index) => (
                        <section key={index} className="mb-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
                                {section.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{section.body}</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {section.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    {/* Key Takeaway */}
                    <aside className="bg-orange-100 border-l-4 border-orange-400 p-6 my-10 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-orange-700 mb-2">Key Takeaway</h3>
                        <p className="text-gray-800">
                            Artificial Intelligence is becoming an integral part of modern game design. By offering smarter systems and creative support, AI contributes to the development of more interactive and efficient gaming experiences.
                        </p>
                    </aside>

                    {/* Future Outlook */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
                            What's Next in AI-Powered Gaming?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            As technology evolves, AI is expected to influence new areas of gaming. Developers are exploring applications in virtual reality, cloud-based platforms, and interactive storytelling to enhance user engagement.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>AI-supported VR scenarios</li>
                            <li>Smarter cloud-based performance</li>
                            <li>Dialogue-driven, voice-activated characters</li>
                            <li>Low-latency experiences in real-time gaming</li>
                        </ul>
                    </section>

                    {/* Final Thoughts */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
                            Final Thoughts
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            The integration of AI in gaming continues to develop as an important industry trend. In the coming years, it may serve as a supportive tool for both developers and players, leading to more personalized and efficient gameplay experiences.
                        </p>
                    </section>

                    {/* Tags */}
                    <footer className="text-sm text-gray-600 mt-10 border-t pt-6">
                        Tags: <span className="text-orange-600">AI</span>, Gaming, Technology, 2025, Innovation
                    </footer>

                    {/* Navigation */}
                    <div className="flex justify-start mt-8">
                        <button
                            onClick={() => navigate('/guides/flying-chess-vs-ludo')}
                            className="text-orange-500 hover:text-orange-700 font-medium"
                        >
                            ← Previous Article
                        </button>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default AIInGamingArticle;

