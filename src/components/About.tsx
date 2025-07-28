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
              About Us - Play Card Fun Guide
            </h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
              <p className="text-base sm:text-lg">
                Welcome to <span className="font-bold text-orange-600">playcardfun.online</span> — your trusted space for casual, skill-based gaming tips, guides, and insights.
              </p>

              <p>
                Our mission is simple: to help players of all levels enjoy gaming in a fun, responsible, and enriching way. From easy tutorials to advanced strategy guides, our content is designed to make learning and playing more enjoyable — without pressure or risk.
              </p>

              <p>
                We focus on safe, family-friendly games including classic board games, casual mobile games, and skill-based challenges. Our blog features walkthroughs, tips, and articles to enhance your play — all written for general audiences and strictly entertainment-focused.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">What We Offer</h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Beginner-friendly game guides and how-to articles</li>
                <li>Tips and strategies for improving your skills</li>
                <li>Honest, research-based game reviews</li>
                <li>Safe download suggestions for top-rated mobile games</li>
                <li>Trusted updates on gaming trends and features</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Our Commitment</h2>
              <p>
                We do not promote or endorse any form of real-money gaming, gambling, or betting. Our content strictly avoids any such practices. Everything shared on our platform is meant for general education, safe entertainment, and skill-based learning only.
              </p>

              <p>
                This website is designed in full compliance with Google Ads policies and safe browsing standards. Your experience here will always remain secure, respectful, and enjoyable.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Join the Fun!</h2>
              <p>
                Games are more than just play — they're opportunities to grow, connect, and explore new challenges. We're excited to support a positive, ad-safe gaming community that values creativity, curiosity, and smart fun.
              </p>

              <p>
                Feel free to explore our latest content, bookmark your favorite guides, and reach out with feedback or suggestions. We love hearing from our readers!
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 rounded-md">
                <p className="font-semibold text-yellow-800">
                  Thank you for visiting <span className="text-orange-600">playcardfun.online</span> — where gaming is all about learning, fun, and safety.
                </p>
                <p className="font-bold text-gray-800 mt-2">Let the games begin — responsibly!</p>
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

