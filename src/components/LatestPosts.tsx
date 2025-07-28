// ✅ Converted to TSX
import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Defined interface for post structure
interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const LatestPosts: React.FC = () => {
  // ✅ Typed posts as Post[]
  const posts: Post[] = [
    {
      id: 1,
      title: "Top Online Mobile Games in Pakistan",
      description: "Discover the most popular mobile games that are taking Pakistan by storm. Complete guide and reviews.",
      date: "December 10, 2023",
      image: "https://elements-resized.envatousercontent.com/elements-video-cover-images/4d1ca4d6-04c7-4c7a-884d-0de7c89bcfbc/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=964f87e9e0c75dd57c1d045828f96c2079d624b6b9ff71a9ec04d4876237d0d9",
      link: "/guides/top-online-mobile-games",
    },
    {
      id: 2,
      title: "How to Play F1 Fast for Beginners - Complete Basic Explained",
      description: "Master F1 racing games with our comprehensive beginner's guide. Tips, tricks, and strategies included.",
      date: "December 8, 2023",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpKLWXs4U_kNstKgNR7a3imy8ZrN2KSxRgOX0I_nDRDV4nly6kSsKzZqiuMx3wZRW-JE&usqp=CAU",
      link: "/guides/strategy-card-basics",
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
      image: "https://chronicleillinois.com/wp-content/uploads/2024/06/WOODFORD-061924-Eureka-Public-Library-notes-PHOTO-1-300x201.jpeg",
      link: "/guides/flying-chess-vs-ludo",
    },
    {
      id: 5,
      title: "How AI is Changing the Way We Play Games in 2024",
      description: "Explore how artificial intelligence is revolutionizing the gaming industry and player experiences.",
      date: "December 1, 2023",
      image: "https://media.assettype.com/gulfnews/2025-07-10/1tvaz83t/AI-Abu-Dhabi.jpg?w=320&auto=format,compress&fit=max",
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
            {/* ✅ Image with hover effect */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4 sm:p-6">
              <div className="font-semibold sm:font-bold text-base sm:text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
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
