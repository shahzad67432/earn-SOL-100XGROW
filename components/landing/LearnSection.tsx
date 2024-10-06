import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Zap, Star, BarChart } from 'lucide-react';

const LearnSection: React.FC = () => {
  const learningPaths = [
    { icon: <BookOpen className="w-8 h-8" />, title: "Beginner", color: "bg-green-200" },
    { icon: <Code className="w-8 h-8" />, title: "Intermediate", color: "bg-green-300" },
    { icon: <Zap className="w-8 h-8" />, title: "Advanced", color: "bg-green-400" },
  ];

  const floatingItems = [
    { icon: <Star className="w-6 h-6" />, text: "Solana Basics" },
    { icon: <Code className="w-6 h-6" />, text: "Smart Contracts" },
    { icon: <BarChart className="w-6 h-6" />, text: "DeFi Concepts" },
  ];

  return (
    <section className="py-20 bg-green-50 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-bold text-green-950 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Extensive Learning Materials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              className={`${path.color} rounded-lg shadow-lg p-6 relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>
              <div className="relative z-10">
                {path.icon}
                <h3 className="text-2xl font-semibold text-green-950 mt-4 mb-2">{path.title}</h3>
                <p className="text-green-800">
                  Comprehensive {path.title.toLowerCase()} level courses to build your Solana expertise.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-green-950 mb-6 text-center">
            Dive Deep into Solana
          </h3>
          <p className="text-green-800 text-center max-w-2xl mx-auto mb-8">
            Our curated learning paths cover everything from basic concepts to advanced Solana development. 
            Master the skills needed to build the next generation of decentralized applications.
          </p>
          <div className="flex justify-center">
            <a 
              href="#explore-courses" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Explore Courses
            </a>
          </div>
        </motion.div>

        {floatingItems.map((item, index) => (
          <motion.div
            key={item.text}
            className="absolute hidden md:block"
            style={{
              top: `${20 + index * 25}%`,
              left: index % 2 === 0 ? '5%' : '85%',
            }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.8 + index * 0.2,
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            }}
          >
            <div className="bg-white rounded-full shadow-lg p-3 flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                {item.icon}
              </div>
              <span className="text-green-950 font-semibold">{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearnSection;