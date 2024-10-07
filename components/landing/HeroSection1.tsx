import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coins, BookOpen, Trophy, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const features = [
    { icon: <Coins className="text-green-600" size={24} />, text: "Earn SOL" },
    { icon: <BookOpen className="text-green-600" size={24} />, text: "Learn Blockchain" },
    { icon: <Trophy className="text-green-600" size={24} />, text: "Compete in Quizzes" },
    { icon: <Users className="text-green-600" size={24} />, text: "Join Community" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-green-950 overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mb-10 lg:mb-0 z-10"
        >
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Master Solana, <br />
            <span className="text-green-600">Earn Rewards</span>
          </h1>
          <p className="text-xl mb-8 text-green-800">
            Outperform in Solana quizzes, create quality content by posting blogs, and boost your SOL earnings while expanding your blockchain expertise.
          </p>
          <motion.a
            href="/profile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-green-500 hover:to-green-400 transition duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Start Your Journey <ArrowRight className="inline-block ml-2" />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative w-full h-96">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-70"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 rounded-full filter blur-3xl opacity-70"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-green-950">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="bg-green-100 rounded-full p-2">
                        {feature.icon}
                      </div>
                      <span className="text-lg font-semibold">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 text-center pb-8"
      >
        <p className="text-green-800 mb-4">build the solana community by connecting wallet</p>
        <div className="flex justify-center space-x-4">
          <div className="bg-white rounded-full px-4 py-2 shadow-md">
            <span className="font-bold text-green-600">++</span> Users
          </div>
          <div className="bg-white rounded-full px-4 py-2 shadow-md">
            <span className="font-bold text-green-600">++</span> Quizzes
          </div>
          <div className="bg-white rounded-full px-4 py-2 shadow-md">
            <span className="font-bold text-green-600">++</span> SOL
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;