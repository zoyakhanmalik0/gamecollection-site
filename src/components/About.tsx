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
              About Us - Officialamy Guide
            </h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
              <p className="text-base sm:text-lg">
                Welcome to <span className="font-bold text-orange-600">Officialamy.online</span> — your go-to gaming blog for fun, strategy, and skill-based play.
              </p>

              <p>
                We created this blog with one simple goal: to make gaming more enjoyable, informative, and accessible for everyone. Whether you're just getting started or looking to sharpen your skills, our guides, tips, and reviews are designed to help you play smarter and have more fun.
              </p>

              <p>
                We cover a wide range of games, including board games, casual mobile games, card games for entertainment, and other non-gambling digital games. You'll find everything from step-by-step tutorials to strategy insights and gameplay updates — all written to keep things exciting, safe, and educational.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">What We Offer</h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li>Step-by-step game guides for beginners and casual players</li>
                <li>Smart tips and strategies to boost your gameplay</li>
                <li>Honest reviews of trending skill-based games</li>
                <li>Safe download suggestions for popular apps</li>
                <li>Gaming news and updates you can trust</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Our Commitment</h2>
              <p>
                We do not promote real-money gaming, gambling, or betting of any kind. All the games and content shared on our site are meant for entertainment and educational purposes only. Our blog is built to comply with Google Ads policies, ensuring a safe and responsible platform for all users.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Join the Fun!</h2>
              <p>
                Gaming isn't just about winning — it's about learning, improving, and enjoying the process. We're here to build a community of gamers who love skill-based play, friendly competition, and lifelong learning through games.
              </p>

              <p>
                Feel free to explore our latest posts, subscribe for weekly updates, or reach out if you have questions or suggestions.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 rounded-md">
                <p className="font-semibold text-yellow-800">
                  Thank you for visiting <span className="text-orange-600">Officialamy.online</span> — where gaming meets smart fun.
                </p>
                <p className="font-bold text-gray-800 mt-2">Let the games begin!</p>
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
