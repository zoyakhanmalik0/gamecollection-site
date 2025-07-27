import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex flex-col">
      <Header />
      <div className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
              About Us - Game Collector Guide
            </h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
              <p className="text-base sm:text-lg">
                Welcome to <span className="font-bold text-orange-600">gamecollector.site</span> — a friendly blog created to explore games through helpful tips, tutorials, and positive engagement.
              </p>

              <p>
                Our mission is simple: to make skill-based and casual gaming fun, easy to understand, and safe for everyone. Whether you're playing for relaxation or learning new strategies, we’re here to guide your journey in a responsible and enjoyable way.
              </p>

              <p>
                We focus on a variety of digital and tabletop games including board games, mobile games, casual puzzle games, and educational card games. Our articles aim to support learning, logical thinking, and creativity through play — all without any real-money or gambling-related content.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">What You’ll Find Here</h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Beginner-friendly guides for skill-based games</li>
                <li>Helpful strategies to improve your gameplay</li>
                <li>Neutral and honest reviews of trending casual games</li>
                <li>Safe download suggestions for popular apps</li>
                <li>Gaming-related updates and learning tips</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Our Safety Commitment</h2>
              <p>
                We strictly avoid content related to gambling, betting, or real-money gaming. All the games and guides featured on our site are for recreational and educational purposes only. We ensure our platform aligns with Google Ads policies to provide a secure experience for all visitors.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Be Part of the Community</h2>
              <p>
                At <span className="font-bold text-orange-600">gamecollector.site</span>, we believe in the joy of learning through games. Whether you're solving puzzles or exploring board game strategies, we encourage a healthy mindset focused on curiosity and improvement.
              </p>

              <p>
                Stay connected by browsing our latest posts, signing up for updates, or sharing your feedback. We’re excited to grow a community where games are seen as a meaningful part of learning and fun.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 rounded-md">
                <p className="font-semibold text-yellow-800">
                  Thank you for visiting <span className="text-orange-600">gamecollector.site</span> — where games inspire learning, focus, and fun.
                </p>
                <p className="font-bold text-gray-800 mt-2">Let the fun begin, the smart way!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
