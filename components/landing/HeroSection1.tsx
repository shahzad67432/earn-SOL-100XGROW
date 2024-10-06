import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coins, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] bg-green-50 text-green-950 overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center pl-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mb-10 lg:mb-0"
        >
          <h1 className="text-5xl font-bold mb-6">
            Learn, Earn, and Grow with 100xSolana
          </h1>
          <p className="text-xl mb-8">
            Out perform the solana quizzes and post quality content to increase your SOL earning and knowledge
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center"
          >
            Get Started <ArrowRight className="ml-2" />
          </motion.button>
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
              className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-xl opacity-70"
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
              className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 rounded-full filter blur-xl opacity-70"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <Coins className="text-green-600 mr-3" size={32} />
                  <span className="text-2xl font-bold">Earn SOL</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="text-green-600 mr-3" size={32} />
                  <span className="text-2xl font-bold">Learn Blockchain</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-100 to-transparent" />
    </section>
  );
};

export default HeroSection;