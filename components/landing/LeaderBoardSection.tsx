import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Coins, ArrowUpCircle } from 'lucide-react';

const LeaderboardSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-950 mb-8 sm:mb-16 text-center sm:text-start relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Climb the Leaderboard, <br className="hidden sm:block" />
          <span className="text-green-600">Earn Bounties</span>
          <motion.div 
            className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 sm:right-auto h-1 sm:h-2 bg-green-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative px-0 sm:px-12">
          {[
            { icon: Trophy, title: "Competitive Tests", description: "Each test has its own leaderboard. Showcase your knowledge and compete with others to reach the top." },
            { icon: Users, title: "Top Performers", description: "The top 10% of quiz takers on each leaderboard qualify for bounty rewards. Consistency is key!" },
            { icon: Coins, title: "Earn Bounties", description: "Bounties are distributed from the pool of premium test fees. The higher you rank, the more chances to earn SOL!" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-green-950 rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-green-600 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2" />
              <item.icon className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-semibold text-green-50 mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-green-200">{item.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-20 bg-green-950 rounded-3xl p-6 sm:p-10 relative overflow-hidden mx-0 sm:mx-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-your-texture-image.png')] opacity-5" />
          <h3 className="text-2xl sm:text-4xl font-semibold text-green-50 mb-6 sm:mb-10 relative z-10 text-center sm:text-left">How It Works</h3>
          <div className="flex flex-col sm:flex-row justify-between items-center relative z-10">
            {[
              { icon: ArrowUpCircle, text: "Take tests and improve your score" },
              { icon: Trophy, text: "Reach top 10% on the leaderboard" },
              { icon: Coins, text: "Earn your share of the bounty pool" }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="flex-1 text-center mb-6 sm:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + 0.2 * index }}
                >
                  <div className="relative inline-block">
                    <step.icon className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mb-3 sm:mb-4" />
                    <div className="absolute top-0 left-0 w-full h-full bg-green-600 rounded-full filter blur-md opacity-30 animate-pulse" />
                  </div>
                  <p className="text-green-100 text-sm sm:text-lg">{step.text}</p>
                </motion.div>
                {index < 2 && (
                  <motion.div 
                    className="w-0.5 h-8 sm:w-16 sm:h-0.5 bg-green-600 my-4 sm:my-0 mx-auto sm:mx-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + 0.2 * index }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <a 
            href="/leaderboard" 
            className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:from-green-500 hover:to-green-400 transition duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Start Competing Now
          </a>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-40 sm:w-80 h-40 sm:h-80 bg-green-100 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </section>
  );
};

export default LeaderboardSection;