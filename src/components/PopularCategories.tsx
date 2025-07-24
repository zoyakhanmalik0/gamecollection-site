import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Game Guides",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqMI0nmSJc6vtRTXnGuhOR_VADPHrJ1zVcpImPJDxFdcBwQ-6P",
      path: "/game-guides"
    },
    {
      id: 2,
      title: "Game Reviews",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgzFWlc4KRdqiVDaLJLFOf5yjfpiZrYUuAM9VEIha3ZkrKsbw2",
      path: "/GameReviewpage"
    },
    {
      id: 3,
      title: "Tips & Tricks",
      image: "https://i.pinimg.com/236x/0a/af/17/0aaf1746da240b4802844b77705aa1d7.jpg,
      path: "/tippage"
    },
    {
      id: 4,
      title: "Trending Games",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQF7-z-yzv-EhA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1732024202803?e=2147483647&v=beta&t=-Q_qTeR3kAAinf1ehRhNDjYQ1DK9fqjEQWTN0MOfQ5k",
      path: "/trending-games"
    }
  ];

  return (
    <div className="mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 shadow-lg"
            onClick={() => navigate(category.path)}
          >
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-square">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-bold text-xl sm:text-2xl">
                  {category.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-colors"
          onClick={() => navigate(0)}
        >
          Explore Them All
        </button>
      </div>
    </div>
  );
};

export default PopularCategories;
