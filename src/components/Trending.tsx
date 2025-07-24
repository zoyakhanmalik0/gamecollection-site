import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Trending = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* White Box Container */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center min-h-[500px] flex flex-col justify-center">
                        {/* Page Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                            Trending Games
                        </h1>

                        {/* Message */}
                        <p className="text-gray-600 text-base sm:text-lg mb-10">
                            It seems we can't find what you're looking for. Perhaps searching can help.
                        </p>

                        {/* Search Form */}
                        <form
                            onSubmit={handleSearch}
                            className="flex flex-col sm:flex-row justify-center items-stretch gap-2 sm:gap-0 max-w-md mx-auto w-full"
                        >
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none font-medium transition-colors"
                            >
                                SEARCH
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Trending;
