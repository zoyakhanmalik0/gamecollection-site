import React from 'react';
import { Download } from 'lucide-react';

const DownloadPage = () => {
  // ✅ List of download buttons (no betting-related terms present)
  const buttons = [
    { label: 'Download 3Patti DragonTigerClub', href: 'https://3pattirs.net/?from_gameid=5806525&channelCode=100000' },
    { label: 'Download 3 Patti Teen Official', href: 'https://3pattiteen.com/?from_gameid=8307610&channelCode=100000' },
    { label: 'Download Official Flying Chess', href: 'https://flyingchess.com/?from_gameid=8307610&channelCode=100000' },
    { label: 'Download Teen Patti No 1', href: 'https://dragontigerclub.com/?from_gameid=5806525&channelCode=100000' },
    { label: 'Download 3 Patti Gold', href: 'https://3pattiteen.com/?from_gameid=8307610&channelCode=100000' },
    { label: 'Download 3 Patti Blue', href: 'https://3pattirs.net/?from_gameid=5806525&channelCode=100000' },
    { label: 'Download 3 Patti Crown', href: 'https://3pattiteen.com/?from_gameid=8307610&channelCode=100000' },
    { label: 'Download 3 Patti Gold', href: 'https://3pattirs.net/?from_gameid=5806525&channelCode=100000' },
    { label: 'Download 3 Patti Boss', href: 'https://3pattiteen.com/?from_gameid=8307610&channelCode=100000' },
    { label: 'Download 3 Patti Loot', href: 'https://3pattirs.net/?from_gameid=5806525&channelCode=100000' },
    { label: 'Download 3 Patti Lucky', href: 'https://3pattiteen.com/?from_gameid=8307610&channelCode=100000' },
  ];

  // ✅ Green gradient style applied to buttons
  const greenGradient = 'bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-600 hover:to-emerald-700';

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-6">
      
      {/* ✅ Top Image */}
      <div className="w-full max-w-2xl mb-8">
        <img
          src="https://apkfbi.com/wp-content/uploads/2025/03/1-1.webp"
          alt="Game Preview"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* ✅ First 4 Buttons */}
      <div className="w-full max-w-md space-y-4 mb-10">
        {buttons.slice(0, 4).map(({ label, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full items-center justify-center gap-3 ${greenGradient} text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300`}
          >
            <Download size={16} />
            {label}
          </a>
        ))}
      </div>

      {/* ✅ Second Image (after first 4 buttons) */}
      <div className="w-full max-w-3xl mb-10 mx-auto">
        <img
          src="https://miro.medium.com/v2/resize:fit:1280/1*1cPINnY3SbqkqC4TLAL43g.jpeg"
          alt="3 Patti Promotion"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* ✅ Remaining Buttons */}
      <div className="w-full max-w-md space-y-4 mx-auto mb-10">
        {buttons.slice(4).map(({ label, href }, index) => (
          <a
            key={index + 4} // ✅ Ensure unique key
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full items-center justify-center gap-3 ${greenGradient} text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300`}
          >
            <Download size={16} />
            {label}
          </a>
        ))}
      </div>

      {/* ✅ Final Image */}
      <div className="w-full max-w-2xl mb-10 mx-auto">
        <img
          src="https://miro.medium.com/v2/resize:fit:694/1*O3xsvJ5O5t22A0v6IyE2Ag.jpeg"
          alt="Game Bonus Poster"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default DownloadPage;
