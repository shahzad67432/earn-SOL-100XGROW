import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Zap, Star, BarChart, ArrowRight } from 'lucide-react';

const LearnSection: React.FC = () => {
  const learningPaths = [
    { icon: <BookOpen className="w-10 h-10" />, title: "Beginner", color: "bg-gradient-to-br from-green-200 to-green-300" },
    { icon: <Code className="w-10 h-10" />, title: "Intermediate", color: "bg-gradient-to-br from-green-300 to-green-400" },
    { icon: <Zap className="w-10 h-10" />, title: "Advanced", color: "bg-gradient-to-br from-green-400 to-green-500" },
  ];

  const floatingItems = [
    { icon: <Star className="w-6 h-6" />, text: "Solana Basics" },
    { icon: <Code className="w-6 h-6" />, text: "Smart Contracts" },
    { icon: <BarChart className="w-6 h-6" />, text: "DeFi Concepts" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl font-bold text-green-950 mb-16 text-center relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Extensive Learning Materials
          <motion.div 
            className="absolute -bottom-4 left-0 h-2 bg-green-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 px-12 pt-4">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              className={`${path.color} rounded-2xl shadow-xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 transform rotate-45"></div>
              <div className="relative z-10">
                <div className="bg-white bg-opacity-30 rounded-full p-4 inline-block mb-6">
                  {path.icon}
                </div>
                <h3 className="text-3xl font-semibold text-green-950 mb-4">{path.title}</h3>
                <p className="text-green-800 text-lg mb-6">
                  Comprehensive {path.title.toLowerCase()} level courses to build your Solana expertise.
                </p>
                <a href={`#${path.title.toLowerCase()}-courses`} className="text-green-950 font-semibold flex items-center hover:text-green-700 transition-colors duration-300">
                  Explore {path.title} Courses <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden mx-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-semibold text-green-950 mb-6 text-center">
              Dive Deep into Solana
            </h3>
            <p className="text-green-800 text-xl text-center max-w-3xl mx-auto mb-10 leading-relaxed">
              Our curated learning paths cover everything from basic concepts to advanced Solana development. 
              Master the skills needed to build the next generation of decentralized applications.
            </p>
            <div className="flex justify-center">
              <a 
                href="#explore-courses" 
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-green-500 hover:to-green-400 transition duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Explore All Courses
              </a>
            </div>
          </div>
        </motion.div>

        {floatingItems.map((item, index) => (
          <motion.div
            key={item.text}
            className="absolute hidden lg:block"
            style={{
              top: `${15 + index * 30}%`,
              left: index % 2 === 0 ? '2%' : '90%',
            }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.8 + index * 0.2,
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }
            }}
          >
            <div className="bg-white rounded-full shadow-lg p-4 flex items-center">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                {item.icon}
              </div>
              <span className="text-green-950 font-semibold text-lg">{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default LearnSection;