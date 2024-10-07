"use client"
import React from 'react';
import { motion } from 'framer-motion';
import GoogleAuthButton from '@/components/ui/Buttons/GoogleAuthButton';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Sign in to access your account</p>
        <GoogleAuthButton />
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-600 hover:text-green-800 font-medium">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;