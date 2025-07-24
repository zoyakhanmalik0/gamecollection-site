import React from 'react';
import { Download } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Image Section */}
      <div className="w-full max-w-2xl mb-8">
        <img
          src="https://apkfbi.com/wp-content/uploads/2025/03/1-1.webp"
          alt="Game Preview"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* First Set of Download Buttons */}
      <div className="w-full max-w-md space-y-4 mb-10">
        <a href="https://3pattirs.net/?from_gameid=5801295&channelCode=100000" className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 transition duration-300">
          <Download size={16} />
          Download 3Patti DragonTigerClub
        </a>
        <a href="https://3pattiteen.com/?from_gameid=8301269&channelCode=100000" className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg hover:from-pink-600 hover:to-red-700 transition duration-300">
          <Download size={16} />
          Download 3 Patti Teen Official
        </a>
        <a href="https://flyingchess.com/?from_gameid=8301269&channelCode=100000" className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300">
          <Download size={16} />
          Download Official Flying Chess
        </a>
        <a href="https://dragontigerclub.com/?from_gameid=5801295&channelCode=100000" className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300">
          <Download size={16} />
          Download Teen Patti No 1
        </a>
      </div>

      {/* Second Section */}
      <div className="w-full">
        {/* Second Image */}
        <div className="w-full max-w-3xl mb-10 mx-auto">
          <img
            src="https://miro.medium.com/v2/resize:fit:1280/1*1cPINnY3SbqkqC4TLAL43g.jpeg"
            alt="3 Patti Promotion"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Second Set of Buttons */}
        <div className="w-full max-w-md space-y-4 mx-auto mb-10">
          {[
            {
              label: 'Download 3 Patti Gold',
              href: 'https://3pattiteen.com/?from_gameid=8301269&channelCode=100000',
              gradient: 'from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600',
            },
            {
              label: 'Download 3 Patti Blue',
              href: 'https://3pattirs.net/?from_gameid=5801295&channelCode=100000',
              gradient: 'from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600',
            },
            {
              label: 'Download 3 Patti Crown',
              href: 'https://3pattiteen.com/?from_gameid=8301269&channelCode=100000',
              gradient: 'from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700',
            },
            {
              label: 'Download 3 Patti Gold',
              href: 'https://3pattirs.net/?from_gameid=5801295&channelCode=100000',
              gradient: 'from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500',
            },
            {
              label: 'Download 3 Patti Boss',
              href: 'https://3pattiteen.com/?from_gameid=8301269&channelCode=100000',
              gradient: 'from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
            },
            {
              label: 'Download 3 Patti Loot',
              href: 'https://3pattirs.net/?from_gameid=5801295&channelCode=100000',
              gradient: 'from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600',
            },
            {
              label: 'Download 3 Patti Lucky',
              href: 'https://3pattiteen.com/?from_gameid=8301269&channelCode=100000',
              gradient: 'from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600',
            },
          ].map(({ label, href, gradient }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex w-full items-center justify-center gap-3 bg-gradient-to-r ${gradient} text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300`}
            >
              <Download size={16} />
              {label}
            </a>
          ))}
        </div>

        {/* Final Image */}
        <div className="w-full max-w-2xl mb-10 mx-auto">
          <img
            src="https://miro.medium.com/v2/resize:fit:694/1*O3xsvJ5O5t22A0v6IyE2Ag.jpeg"
            alt="Game Bonus Poster"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
