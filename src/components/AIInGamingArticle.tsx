import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Sparkles, Bot, Brain, Cpu } from 'lucide-react';

const AIInGamingArticle: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Smarter NPCs with Real Emotions",
            body: "AI-driven characters no longer just follow scripts—they respond emotionally, adapt tactically, and even remember your past decisions.",
            icon: <Bot className="text-orange-500 w-5 h-5" />,
            features: [
                "Dynamic memory of past player interactions",
                "Emotional expressions and evolving dialogue",
                "Real-time behavior adjustments"
            ]
        },
        {
            title: "Procedural Worlds You Can Get Lost In",
            body: "AI now crafts endless unique landscapes and missions, offering an exploration experience that feels handcrafted every time.",
            icon: <Cpu className="text-orange-500 w-5 h-5" />,
            features: [
                "Endless world generation with logical structure",
                "Smarter side quests and dynamic lore",
                "Replay value skyrockets"
            ]
        },
        {
            title: "Hyper-Personalized Game Experiences",
            body: "From difficulty to story branching, AI ensures your gameplay feels tailor-made just for you.",
            icon: <Brain className="text-orange-500 w-5 h-5" />,
            features: [
                "Real-time difficulty balancing",
                "Customized challenges and environments",
                "Storylines based on your decisions"
            ]
        },
        {
            title: "AI Tools Empowering Game Developers",
            body: "Behind the scenes, AI accelerates game creation with intelligent testing, asset design, and even voice acting.",
            icon: <Sparkles className="text-orange-500 w-5 h-5" />,
            features: [
                "AI-generated 3D models and textures",
                "Smart testing with bug detection",
                "Faster development cycles"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 flex flex-col">
            <Header />
            <main className="flex-grow max-w-4xl mx-auto px-6 py-10">
                <section className="bg-white p-8 rounded-2xl shadow-xl">
                    {/* Back Button */}
                    <button onClick={onBack} className="mb-6 flex items-center text-orange-600 hover:text-orange-800 font-medium">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Articles
                    </button>

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                            The AI Revolution in Gaming (2025 & Beyond)
                        </h1>
                        <div className="flex justify-center space-x-6 text-gray-500 text-sm mt-2">
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> July 27, 2025</span>
                            <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Game Insights Team</span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 6 min read</span>
                        </div>
                        <img
                            src="https://media.assettype.com/gulfnews/2025-07-10/1tvaz83t/AI-Abu-Dhabi.jpg?w=600"
                            alt="AI Gaming"
                            className="rounded-xl shadow-lg mt-8 w-full max-w-2xl mx-auto"
                        />
                    </div>

                    {/* Sections */}
                    {sections.map((sec, idx) => (
                        <div key={idx} className="mb-10">
                            <h2 className="text-2xl font-bold text-orange-600 flex items-center mb-4">
                                {sec.icon}
                                <span className="ml-2">{sec.title}</span>
                            </h2>
                            <p className="text-gray-700 mb-4">{sec.body}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                                {sec.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Quote Box */}
                    <div className="bg-orange-100 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm my-10">
                        <h3 className="text-lg font-bold text-orange-800 mb-2">Takeaway</h3>
                        <p className="text-gray-700">
                            AI isn’t just a tool — it’s a revolution. It’s turning games into living worlds where players shape stories as much as they play them.
                        </p>
                    </div>

                    {/* Future Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">What’s Next?</h2>
                        <p className="text-gray-700 mb-4">
                            In the coming years, AI will integrate deeper into virtual worlds. Expect voice-controlled NPCs, real-time physics, and hyper-realistic simulations.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 pl-4 space-y-2">
                            <li>Cloud-accelerated AI rendering</li>
                            <li>Seamless cross-platform AI syncing</li>
                            <li>AI-built immersive story worlds</li>
                        </ul>
                    </div>

                    {/* Final Thoughts */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">Final Thoughts</h2>
                        <p className="text-gray-700">
                            AI is no longer futuristic—it's the new foundation of gaming. And as it continues to evolve, the boundaries between reality and imagination will blur in exciting, unimaginable ways.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="text-sm text-gray-500">Tags: AI, Gaming, GameDev, Future, 2025</div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-10">
                        <button
                            onClick={() => navigate('/guides/flying-chess-vs-ludo')}
                            className="text-orange-500 hover:text-orange-600 transition font-semibold"
                        >
                            ← Previous Post
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AIInGamingArticle;
