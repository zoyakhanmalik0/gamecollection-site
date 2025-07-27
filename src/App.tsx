import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import PopularCategories from './components/PopularCategories';
import LatestPosts from './components/LatestPosts';
import Footer from './components/Footer';
import PrivacyPolicy from './components/policy'; // ✅ Capitalized to match file name

// Pages and Articles
import ArticlePage from './pages/ArticlePage';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Tip from './components/TipPage';
import Review from './components/GameReviewsPage'; // ✅ Ensure filename is GameReviewsPage.tsx
import AIInGamingArticle from './components/AIInGamingArticle';
import Trending from './components/Trending';
import GameGuides from './components/GameGuide';
import Article1 from './components/PattiGuideArticle';
import Article2 from './components/BoardGamesArticle';
import TopOnline from './components/TopOnline';
import BestStrategy from './components/BestStrategy';

// ✅ Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <WelcomeSection />
        <PopularCategories />
        <LatestPosts />
      </main>
      <Footer />
    </div>
  );
};

// ✅ 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-600 font-medium hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

// ✅ Main App Component with Correct Routes
function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* General Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/tip" element={<Tip />} /> {/* ✅ URL made clean */}
        <Route path="/reviews" element={<Review />} /> {/* ✅ Changed from /GameReviewpage */}
        <Route path="/trending-games" element={<Trending />} />
        <Route path="/game-guides" element={<GameGuides />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Dynamic Article Page */}
        <Route path="/article/:id" element={<ArticlePage />} />

        {/* Individual Article Pages */}
        <Route
          path="/guides/ai-in-gaming"
          element={<AIInGamingArticle onBack={() => window.history.back()} />}
        />
        <Route path="/guides/strategy-card-basics" element={<Article1 />} />
        <Route path="/guides/flying-chess-vs-ludo" element={<Article2 />} />
        <Route path="/guides/top-online-mobile-games" element={<TopOnline />} />
        <Route path="/guides/best-strategy-games" element={<BestStrategy />} />

        {/* Catch-all Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
