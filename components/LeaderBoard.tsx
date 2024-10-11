import { getLeaderboard } from '@/actions/getLeaderboard';
import React, { useEffect, useState } from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa'; // For trophy and medal icons

interface User {
  id: number;
  name: string;
  email: string;
  previous_views: number;
  views: number;
  premiumAccess: boolean;
}

interface LeaderboardEntry {
  user: User;
  testId: number;
  id: number;
  userId: number;
  highestScore: number;
}

const Leaderboard = ({ testId }: { testId: number }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [bounty, setBounty] = useState<number | null>(null); // For bounty display

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard(testId);
        setLeaderboard(data);

        // Example logic to set the bounty based on the paid users:
        if (data && data.length >= 20) {
          const totalFee = data[0].test.totalFee || 0; // Assuming totalFee is available
          setBounty(totalFee / 2); // Divide bounty for top 2 users
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaderboard();
  }, [testId]);

  return (
    <div className="leaderboard flex flex-col items-center p-2 sm:p-4 w-full">
      {bounty && (
        <div className="bounty bg-green-100 p-2 sm:p-3 mb-3 sm:mb-4 rounded-lg shadow-md text-center w-full">
          <p className="text-green-700 text-sm sm:text-lg font-semibold">Bounty: ${bounty} for Top 2 Winners!</p>
        </div>
      )}

      <ul className="grid grid-cols-1 gap-2 sm:gap-3 w-full max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 pr-2">
        {leaderboard.map((entry, idx) => (
          <li
            key={entry.userId}
            className={`p-2 sm:p-3 rounded-lg shadow-md bg-white flex justify-between items-center
            transition-all hover:scale-105 hover:shadow-xl cursor-pointer
            ${idx === 0 ? 'border-yellow-400 border-2' : ''}
            ${idx === 1 ? 'border-gray-400 border-2' : ''}`}
          >
            <div className="flex items-center">
              {idx === 0 && <FaTrophy className="text-yellow-500 text-xl sm:text-2xl mr-2" />}
              {idx === 1 && <FaMedal className="text-gray-500 text-xl sm:text-2xl mr-2" />}
              <p className="text-sm sm:text-md font-semibold truncate max-w-[150px] sm:max-w-none">
                {idx + 1}. {entry.user.name}
              </p>
            </div>
            <p className="text-green-600 font-medium text-sm sm:text-base">Score: {entry.highestScore}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-3 sm:mt-4">
        <p className="text-gray-400 text-xs sm:text-sm text-center">* Top 10% players will get the bounty amount.</p>
      </div>
    </div>
  );
};

export default Leaderboard;