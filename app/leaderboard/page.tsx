"use client";
import { getTests } from '@/actions/test';
import { getLeaderboard } from '@/actions/getLeaderboard';
import Leaderboard from '@/components/LeaderBoard';
import React, { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const Page = () => {
  const [testId, setTestId] = useState<number>(1);
  const [tests, setTests] = useState<any[]>([]);
  const [topUsers, setTopUsers] = useState<any[]>([]); // To store Top 1 users
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTests = async () => {
      setLoading(true);
      try {
        const fetchedTests = await getTests();
        if (fetchedTests && fetchedTests.length > 0) {
          setTests(fetchedTests);
        } else {
          setTests([]);
        }
      } catch (error) {
        console.error('Error fetching tests:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTopUsers = async () => {
      try {
        const fetchedTests = await getTests();
        const topUsers = await Promise.all(
          fetchedTests.map(async (test: any) => {
            const leaderboard = await getLeaderboard(test.id);
            return leaderboard && leaderboard.length > 0 ? leaderboard[0] : null;
          })
        );
        setTopUsers(topUsers.filter(Boolean)); // Remove null entries
      } catch (error) {
        console.error('Error fetching top users:', error);
      }
    };

    fetchTests();
    fetchTopUsers();
  }, []);

  return (  
    <div className="flex flex-col md:flex-row md:flex md:flex-between min-h-[80vh] lg:pl-20 my-8 gap-16 w-full">  
      {/* Left Side: Leaderboard and Tests */}  
      <div className="flex flex-col w-full md:w-[66%]">  
        <h2 className="text-3xl font-bold text-green-600 mb-4">Leaderboard</h2>  
  
        {/* Scrollable Tests Container for Horizontal Scrolling */}  
        <div className="flex p-4 bg-gray-50 rounded-lg shadow-md gap-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-green-500">  
          {tests.map((test) => (  
            <div key={test.id} className="inline-block">  
              <Button onClick={() => setTestId(test.id)} testId={test.id} />  
            </div>  
          ))}  
        </div>  
  
        {loading ? (  
          <div className="flex justify-center items-center mt-10">  
            <div className="loader"></div> {/* Add spinner for loading */}  
          </div>  
        ) : (  
          <Leaderboard testId={testId} />  
        )}  
      </div>  
  
      {/* Right Side: Top 1 Users Card */}  
      <div className="w-full md:w-[24%] ml-12 mt-8 md:mt-0"> 
        <div className="bg-white p-4 rounded-lg shadow-md max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500">  
          <h3 className="text-2xl font-bold mb-4 text-green-600">Top SOL Winners</h3>  
          {topUsers.length > 0 ? (  
            <ul className="space-y-4">  
              {topUsers.map((entry: any, idx: number) => (  
                <li key={entry.userId} className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">  
                  <FaTrophy className="text-yellow-500 text-2xl mr-3" />  
                  <div>
                    <p className="text-lg font-bold">{entry.user.name}</p>  
                    <p className="text-sm text-gray-600">Highest Score: {entry.highestScore}</p>  
                  </div>  
                </li>  
              ))}  
            </ul>  
          ) : (  
            <p className="text-gray-500">No top users found.</p>  
          )}  
        </div>  
      </div>  
    </div>  
  );
};

export default Page;

type ButtonProps = {
  onClick: () => void;
  testId: number;
};

const Button: React.FC<ButtonProps> = ({ onClick, testId }) => {
  return (
    <button
      onClick={onClick}
      className="m-1 p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md text-sm transition-all"
    >
      Test {testId} Leaderboard
    </button>
  );
};
