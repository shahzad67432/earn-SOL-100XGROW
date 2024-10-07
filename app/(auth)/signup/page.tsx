"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import { addUser } from "@/actions/user";
import { motion } from 'framer-motion';
import GoogleAuthButton from '@/components/ui/Buttons/GoogleAuthButton';

const SignUpPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addUser(name, email);
      const result = await signIn('email', {
        email,
        callbackUrl: '/profile',
      });
      if (result?.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 bg-green-200 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-36 h-36 bg-green-300 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-600">Or continue with</p>
          <div className="mt-2">
            <GoogleAuthButton />
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 hover:text-green-800 font-medium">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;