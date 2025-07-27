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
        <div
            className="min-h-screen bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e] bg-fixed bg-cover flex flex-col"
        >
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
                            Artificial Intelligence is not just enhancing gaming—it’s redefining it. With dynamic gameplay, smart characters, and evolving narratives, AI is making games more interactive and tailored to individual players like never before.
                        </p>
                    </section>

                    {/* Article Sections */}
                    {[
                        {
                            title: "Smarter NPCs with Personality",
                            body: "NPCs now use machine learning to adapt, evolve, and remember. Conversations feel natural and outcomes change based on your choices.",
                            features: [
                                "NPCs remember past actions",
                                "Improved emotional responses",
                                "Unique story arcs per playthrough"
                            ]
                        },
                        {
                            title: "AI-Crafted Worlds & Missions",
                            body: "From worlds to quests, AI generates immersive environments and plotlines tailored to each player's journey.",
                            features: [
                                "Dynamic level generation",
                                "Endless story possibilities",
                                "Cost-effective game development"
                            ]
                        },
                        {
                            title: "Adaptive Gameplay Systems",
                            body: "Games now adjust in real-time based on how you play. AI evaluates your patterns and tunes difficulty and pacing.",
                            features: [
                                "Real-time difficulty adjustment",
                                "Personalized tutorials and hints",
                                "Optimized pacing for engagement"
                            ]
                        },
                        {
                            title: "Game Dev Gets a Boost",
                            body: "AI supports developers with testing, asset creation, and performance monitoring, making production faster and smarter.",
                            features: [
                                "Bug detection via AI",
                                "AI-generated characters & environments",
                                "Smarter analytics for feedback"
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
                            AI is reshaping games into living experiences that evolve with the player—resulting in richer, more immersive entertainment.
                        </p>
                    </aside>

                    {/* Future Outlook */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
                            What's Next in AI-Powered Gaming?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            The future is bright. Expect hyper-realistic VR, cloud-optimized gaming, and nearly human-level NPCs that push the boundaries of what's possible.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>AI-enhanced VR interactions</li>
                            <li>Cloud gaming with predictive load balancing</li>
                            <li>Voice-interactive characters and narratives</li>
                            <li>Near-zero latency experiences</li>
                        </ul>
                    </section>

                    {/* Final Thoughts */}
                    <section className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
                            Final Thoughts
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            AI is not just a tool—it’s becoming a co-creator in the world of gaming. As 2025 unfolds, the games we play will not only respond to us—they'll grow with us.
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
