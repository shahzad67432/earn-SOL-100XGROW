"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const AuthModal = ({ isOpen, onClose }:{isOpen: any, onClose: any}) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative overflow-hidden">
        {/* Floating objects */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <h2 className="text-2xl font-bold mb-4 text-center">Join Us to Continue</h2>
        <p className="text-gray-600 mb-6 text-center">Sign in or create an account to access this feature.</p>
        
        <div className="space-y-4">
          <button
            onClick={() => router.push('/login')}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Sign Up
          </button>
          <button
            onClick={() => {/* Implement Google sign-in logic */}}
            className="w-full bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AuthModal;