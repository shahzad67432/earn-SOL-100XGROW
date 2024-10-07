import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Edit, TrendingUp, Wallet } from 'lucide-react';

const HowItWorksBlogs: React.FC = () => {
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
          How It Works: Earn from Blogging
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            style={{ y, opacity }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Edit className="mr-2 text-green-600" />
              Create Content
            </h3>
            <p className="mb-6">
              Share your knowledge and insights about Solana and blockchain technology through engaging blog posts.
            </p>
            <div className="bg-green-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Tips for great content:</h4>
              <ul className="list-disc list-inside">
                <li>Choose relevant topics</li>
                <li>Use clear, concise language</li>
                <li>Include examples and visuals</li>
                <li>Engage with your audience</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                Start Writing
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: useTransform(y, (value) => value * -0.5), opacity }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="mr-2 text-green-600" />
              Gain Visibility
            </h3>
            <p className="mb-6">
              As your blog posts gain traction and views, you will start earning SOL based on their popularity.
            </p>
            <div className="bg-green-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Earning potential:</h4>
              <ul className="list-disc list-inside">
                <li>1,000 views: 0.1 SOL</li>
                <li>10,000 views: 1 SOL</li>
                <li>100,000 views: 10 SOL</li>
                <li>1,000,000 views: 100 SOL</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-200 text-green-800 px-6 py-2 rounded-full font-semibold flex items-center"
              >
                <TrendingUp className="mr-2" />
                <span>View Analytics</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: useTransform(y, (value) => value * -1), opacity }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Wallet className="mr-2 text-green-600" />
              Withdraw Earnings
            </h3>
            <p className="mb-6">
              Transfer your earned SOL directly to your connected Solana wallet whenever you are ready.
            </p>
            <div className="bg-green-100 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Withdrawal process:</h4>
              <ol className="list-decimal list-inside">
                <li>Connect your Solana wallet</li>
                <li>Accumulate at least 1 SOL</li>
                <li>Request a withdrawal</li>
                <li>Receive SOL in your wallet</li>
              </ol>
            </div>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                Withdraw Earnings
              </motion.button>
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
            Ready to share your knowledge and earn SOL?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Start Blogging Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksBlogs;