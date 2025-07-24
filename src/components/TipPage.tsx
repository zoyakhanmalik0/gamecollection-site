import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const TipsPage: React.FC = () => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/guides/ai-in-gaming');
    };

    return (
        <div className="min-h-screen bg-amber-50">
            <Header />

            <main className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Tips & Tricks
                        </h1>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
                        <div className="relative w-full aspect-[16/9] sm:aspect-[4/2]">
                            <img
                                src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="AI Technology in Gaming"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 sm:p-8">
                            <h2
                                onClick={handleReadMore}
                                className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-orange-600 transition-colors"
                            >
                                How AI Is Changing the Way We Play Games in 2025
                            </h2>

                            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                                Dragon Chess combines fast-paced gameplay with tactical depth. In this review,
                                we break down its features, pros, and how it compares to traditional board games.
                                Discover why it's quickly becoming a favorite among casual and competitive players alike.
                            </p>

                            <button
                                onClick={handleReadMore}
                                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                            >
                                Read More →
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TipsPage;
