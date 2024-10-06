import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Coins, ArrowUpCircle } from 'lucide-react';

const LeaderboardSection: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-green-950 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Climb the Leaderboard, Earn Bounties
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-green-950 mb-4 text-center">Competitive Tests</h3>
            <p className="text-green-800 text-center">
              Each test has its own leaderboard. Showcase your knowledge and compete with others to reach the top.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-green-950 mb-4 text-center">Top Performers</h3>
            <p className="text-green-800 text-center">
              The top 10% of quiz takers on each leaderboard qualify for bounty rewards. Consistency is key!
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Coins className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-green-950 mb-4 text-center">Earn Bounties</h3>
            <p className="text-green-800 text-center">
              Bounties are distributed from the pool of premium test fees. The higher you rank, the more you earn!
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-green-950 mb-6 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 text-center mb-6 md:mb-0">
              <ArrowUpCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-green-800">Take tests and improve your score</p>
            </div>
            <div className="w-12 h-0.5 bg-green-300 hidden md:block"></div>
            <div className="flex-1 text-center mb-6 md:mb-0">
              <Trophy className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-green-800">Reach top 10% on the leaderboard</p>
            </div>
            <div className="w-12 h-0.5 bg-green-300 hidden md:block"></div>
            <div className="flex-1 text-center">
              <Coins className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-green-800">Earn your share of the bounty pool</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a 
            href="#start-competing" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Start Competing Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeaderboardSection;