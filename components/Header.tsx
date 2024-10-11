"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import WalletButton from "./ui/Buttons/WalletButton";
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const path = usePathname()

  const handleSignup = () => {
    router.push('/signup');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if(path == '/login' || path == '/signup') {
    return null;
  }

  return (
    <header className="bg-gradient-to-r from-green-50 to-green-100 px-4 sm:px-6 lg:px-24 py-4 sm:py-6 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left: Logo */}
        <motion.div 
          className="text-3xl font-bold"
        >
          <Link href="/" className="text-green-800 hover:text-green-600 transition-colors duration-300">100XSOL</Link>
        </motion.div>

        {/* Middle: Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex space-x-6">
          {['Profile', 'Contest', 'blogs', 'Learn', 'Leaderboard', 'Publishpost'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={`/${item.toLowerCase()}`} 
                className="text-green-700 hover:text-green-500 transition-colors duration-300 font-medium"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right: Wallet and Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Wallet Button (visible on all screens) */}
          <WalletButton />

          {/* Auth Button (hidden on mobile) */}
          <motion.div 
            className="hidden lg:block"
          >
            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-white font-medium transition-colors duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={()=>signIn('google')}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-white font-medium transition-colors duration-300"
              >
                Continue with Google
              </button>
            )}
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-green-700 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu (hidden on larger screens) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full lg:hidden mt-4 bg-white rounded-md shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col">
                {['Profile', 'Contest', 'blogs', 'Learn', 'Leaderboard', 'Publishpost'].map((item, index) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="px-4 py-3 text-green-700 hover:bg-green-50 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="p-4">
                {session ? (
                  <button
                    onClick={() => signOut()}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white w-full transition-colors duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={()=> signIn('google')}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white w-full transition-colors duration-300"
                  >
                    Signup
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Appbar;