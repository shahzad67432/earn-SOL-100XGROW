
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { PenSquare, BookOpen, Trophy, Currency } from 'lucide-react';
import { BiMoney, BiTrophy } from 'react-icons/bi';

const HowItWorksSection: React.FC = () => {
  const cards = [
    {
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      title: "Learn",
      description: "Access premium learning materials for beginners, intermediate, and advanced levels.",
    },
    {
      icon: <PenSquare className="w-12 h-12 text-green-600" />,
      title: "Take Quizzes",
      description: "Participate in basic, premium, and contest quizzes to test your knowledge.",
    },
    {
      icon: <BiMoney className="w-12 h-12 text-green-600" />,
      title: "Earn Money",
      description: "outperform in tests pay a minimum amount of money and get the full pot of sol",
    },
    {
      icon: <BiTrophy className="w-12 h-12 text-green-600" />,
      title: "Climb Leaderboards",
      description: "Top 10% of quiz performers earn bounties from premium test fees.",
    },
    {
      icon: <Currency className="w-12 h-12 text-green-600" />,
      title: "Earn SOL",
      description: "Get rewarded in SOL for your performance and knowledge sharing.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-start text-green-950 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12">
          <motion.div 
            className="bg-green-950 rounded-lg border-t-2 border-r-2 border-t-green-950 border-r-green-950  p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-50 mb-6">Earn from Quizzes</h3>
            <div className="space-y-6">
              {cards.slice(0, 3).map((card, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 bg-green-100 rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0">{card.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-950">{card.title}</h4>
                    <p className="text-green-800">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg border-b-2 border-l-2 border-b-green-950 border-l-green-950 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-950 mb-6">Earn from Blogs</h3>
            <div className="space-y-6">
              <motion.div 
                className="bg-green-100 rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold text-green-950 mb-4">Share Your Knowledge</h4>
                <p className="text-green-800 mb-4">Write and publish blogs on Solana-related topics to educate the community.</p>
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>Choose your topic and difficulty level</li>
                  <li>Write engaging and informative content</li>
                  <li>Add code snippets and examples where relevant</li>
                </ul>
              </motion.div>
              <motion.div 
                className="bg-green-100 rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold text-green-950 mb-4">Earn Based on Engagement</h4>
                <p className="text-green-800 mb-4">The more views and interactions your blog receives, the more you earn.</p>
                <div className="flex items-center justify-between text-green-950">
                  <span>Views</span>
                  <span className="text-2xl font-bold">→</span>
                  <span>Earnings</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#get-started" 
            className="text-start inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Start Learning & Earning
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;