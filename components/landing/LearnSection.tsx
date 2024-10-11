import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Zap, Star, BarChart, ArrowRight } from 'lucide-react';

const LearnSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const learningPaths = [
    { icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />, title: "Beginner", color: "bg-gradient-to-br from-green-200 to-green-300" },
    { icon: <Code className="w-8 h-8 md:w-10 md:h-10" />, title: "Intermediate", color: "bg-gradient-to-br from-green-300 to-green-400" },
    { icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />, title: "Advanced", color: "bg-gradient-to-br from-green-400 to-green-500" },
  ];

  const floatingItems = [
    { icon: <Star className="w-4 h-4 md:w-6 md:h-6" />, text: "Solana Basics" },
    { icon: <Code className="w-4 h-4 md:w-6 md:h-6" />, text: "Smart Contracts" },
    { icon: <BarChart className="w-4 h-4 md:w-6 md:h-6" />, text: "DeFi Concepts" },
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-green-950 mb-8 md:mb-16 text-center relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Extensive Learning Materials
          <motion.div 
            className="absolute -bottom-2 md:-bottom-4 left-0 h-1 md:h-2 bg-green-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 mb-10 md:mb-20 px-4 md:px-12 pt-4">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              className={`${path.color} rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white opacity-10 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 transform rotate-45"></div>
              <div className="relative z-10">
                <div className="bg-white bg-opacity-30 rounded-full p-3 md:p-4 inline-block mb-4 md:mb-6">
                  {path.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-green-950 mb-3 md:mb-4">{path.title}</h3>
                <p className="text-green-800 text-base md:text-lg mb-4 md:mb-6">
                  {path.title.toLowerCase()} level courses to build your Solana expertise.
                </p>
                <a href={"/learn"} className="text-green-950 font-semibold flex items-center hover:text-green-700 transition-colors duration-300">
                  Explore {path.title} Courses <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-10 relative overflow-hidden mx-4 md:mx-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-semibold text-green-950 mb-4 md:mb-6 text-center">
              Dive Deep into Solana
            </h3>
            <p className="text-green-800 text-lg md:text-xl text-center max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed">
              Our learning paths cover everything from basic concepts to advanced Solana development and core concepts of web 3 and finance. 
              Master the skills needed to build the next generation of decentralized applications.
            </p>
            <div className="flex justify-center">
              <a 
                href="/learn" 
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:from-green-500 hover:to-green-400 transition duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Explore All Courses
              </a>
            </div>
          </div>
        </motion.div>

        {floatingItems.map((item, index) => (
          <motion.div
            key={item.text}
            className={`absolute ${isMobile ? 'scale-80' : ''}`}
            style={{
              top: `${25 + index * 25}%`,
              left: index % 2 === 0 ? '5%' : '80%',
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
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }
            }}
          >
            <div className="bg-white rounded-full shadow-lg p-2 md:p-3 flex items-center">
              <div className="bg-green-100 rounded-full p-1.5 md:p-2 mr-2 md:mr-3">
                {item.icon}
              </div>
              <span className="text-green-950 font-semibold text-xs md:text-sm whitespace-nowrap">{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default LearnSection;