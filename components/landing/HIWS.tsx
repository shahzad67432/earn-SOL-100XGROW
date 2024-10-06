import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    "https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid",
    "https://learn.swyftx.com/wp-content/uploads/2021/11/What-is-Solana-800x533.png",
    "https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid",
];

const HIWS = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [200, 100, 0]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.9, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="bg-green-50 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-bold text-green-950 mb-8">How It Works: Earn from Quizzes</h2>
      
      <div className="relative w-full max-w-4xl h-[600px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: y1, opacity: opacity1 }}
        >
          <img src="https://learn.swyftx.com/wp-content/uploads/2021/11/What-is-Solana-800x533.png" alt="Quiz Step 1" className="rounded-lg shadow-xl" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: y2, opacity: opacity2 }}
        >
          <img src="https://img.freepik.com/free-photo/3d-rendering-blockchain-technology_23-2151480177.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid" alt="Quiz Step 2" className="rounded-lg shadow-xl" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: y3, opacity: opacity3 }}
        >
          <img src="https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?ga=GA1.1.553667339.1728047671&semt=ais_hybrid" alt="Quiz Step 3" className="rounded-lg shadow-xl" />
        </motion.div>
      </div>

      <div className="mt-12 max-w-2xl text-green-950">
        <p className="mb-4">
          Participate in engaging quizzes and climb the leaderboard to earn Solana. The top 10% of performers on the leaderboard will receive bounty rewards for premium tests.
        </p>
        <p className="mb-4">
          Users pay to access premium tests, and a portion of these fees goes towards the reward pool. This creates an ecosystem where knowledge and performance are directly rewarded.
        </p>
        <p>
          Connect your Solana wallet to easily receive your earnings. Start learning, start earning!
        </p>
      </div>
    </div>
  );
};

export default HIWS;