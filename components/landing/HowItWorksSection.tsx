import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, DollarSign, Users } from 'lucide-react';

const HowItWorksQuizzes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-green-50 text-green-950 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          How It Works: Earn from Quizzes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            style={{ y, opacity }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <DollarSign className="mr-2 text-green-600" />
              Take Premium Tests
            </h3>
            <p className="mb-6">
              Users pay a small fee to access premium tests, creating a reward pool for top performers.
            </p>
            <div className="bg-green-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">How it works:</h4>
              <ol className="list-decimal list-inside">
                <li>Choose a premium test</li>
                <li>Pay a small fee in SOL</li>
                <li>Complete the test</li>
                <li>Aim for the top 10% to earn rewards</li>
              </ol>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                Try a Premium Test
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: useTransform(y, (value) => value * -1), opacity }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 text-green-600" />
              Earn Rewards
            </h3>
            <p className="mb-6">
              Top 10% performers share the reward pool, earning SOL for their knowledge and skills.
            </p>
            <div className="bg-green-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Reward Distribution:</h4>
              <ul className="list-disc list-inside">
                <li>Top 1%: 40% of the pool</li>
                <li>Next 4%: 40% of the pool</li>
                <li>Remaining 5%: 20% of the pool</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-200 text-green-800 px-6 py-2 rounded-full font-semibold flex items-center"
              >
                <Users className="mr-2" />
                <span>Top 10% Leaderboard</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl mb-6">
            Ready to test your knowledge and earn SOL?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Start Earning Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksQuizzes;