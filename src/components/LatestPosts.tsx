import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LatestPosts = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Top Online Mobile Games in Pakistan",
      description: "Discover the most popular mobile games that are taking Pakistan by storm. Complete guide and reviews.",
      date: "December 10, 2023",
      image: "https://cdn.prod.website-files.com/67716c56603531e7c465de0f/6810eb2ffcfeb707f25867d1_Ai%20in%20Sports%20and%20Family%20entertainment.png",
      link: "/guides/top-online-mobile-games",
    },
    {
      id: 2,
      title: "How to Play F1 Fast for Beginners - Complete Basic Explained",
      description: "Master F1 racing games with our comprehensive beginner's guide. Tips, tricks, and strategies included.",
      date: "December 8, 2023",
      image: "https://www.barlarlardown.online/images/post-img-2.jpg",
      link: "/guides/how-to-play-111-patti",
    },
    {
      id: 3,
      title: "Best Strategy Games: Track Favorites Rule",
      description: "Explore the top strategy games that will challenge your mind and provide hours of entertainment.",
      date: "December 5, 2023",
      image: "https://www.edarabia.com/wp-content/uploads/2019/01/award-supporting-teaching-learning-238627.jpg",
      link: "/guides/best-strategy-games",
    },
    {
      id: 4,
      title: "Ultimate Guide to Digital Card Games - Which is Best for Game Night!",
      description: "Find the perfect card game for your next game night with our detailed comparison and reviews.",
      date: "December 3, 2023",
      image: "https://www.barlarlardown.online/images/post-img-4.jpg",
      link: "/guides/flying-chess-vs-ludo",
    },
    {
      id: 5,
      title: "How AI is Changing the Way We Play Games in 2024",
      description: "Explore how artificial intelligence is revolutionizing the gaming industry and player experiences.",
      date: "December 1, 2023",
      image: "https://www.barlarlardown.online/images/post-img-5.jpg",
      link: "/guides/ai-in-gaming",
    },
  ];

  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Latest Posts</h2>
      <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
        Check the most recent posts that are geared to helping you in the gaming world
      </p>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={post.link}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition-all hover:scale-105 block"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4 sm:p-6">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  navigate(post.link);
                }}
                className="font-semibold sm:font-bold text-base sm:text-lg text-gray-800 mb-2 hover:text-orange-600 transition-colors cursor-pointer"
              >
                {post.title}
              </div>

              <p className="text-gray-600 text-sm mb-3">{post.description}</p>
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <span>{post.date}</span>
                <span className="text-blue-600 font-medium group-hover:text-orange-600 transition-colors">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
