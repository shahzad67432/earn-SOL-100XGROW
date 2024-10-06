"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import WalletButton from "./ui/Buttons/WalletButton";
import { Menu, X } from 'lucide-react';

export const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignup = () => {
    router.push('/signup');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-600 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 bg-green-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-green-950">100xGrow</Link>
        </div>

        {/* Middle: Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/profile" className="hover:text-green-700">Profile</Link>
          <Link href="/contest" className="hover:text-green-700">Quizzes</Link>
          <Link href="/blogs" className="hover:text-green-700">Community</Link>
          <Link href="/learn" className="hover:text-green-700">Learn</Link>
          <Link href="/leaderboard" className="hover:text-green-700">Leaderboard</Link>
          <Link href="/publishpost" className="hover:text-green-700">Post</Link>
        </nav>

        {/* Right: Wallet and Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Wallet Button (visible on all screens) */}
          <WalletButton />

          {/* Auth Button (hidden on mobile) */}
          <div className="hidden lg:block">
            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-green-950 hover:bg-red-700 px-6 py-3 rounded-md text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleSignup}
                className="bg-green-700 hover:bg-green-950 px-4 py-2 rounded-md text-white"
              >
                Signup
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu (hidden on larger screens) */}
        {isMenuOpen && (
          <div className="w-full lg:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/profile" className="hover:text-green-700">Profile</Link>
              <Link href="/contest" className="hover:text-green-700">Quizzes</Link>
              <Link href="/blogs" className="hover:text-green-700">Community</Link>
              <Link href="/learn" className="hover:text-green-700">Learn</Link>
              <Link href="/leaderboard" className="hover:text-green-700">Leaderboard</Link>
              <Link href="/publishpost" className="hover:text-green-700">Post</Link>
            </nav>
            <div className="mt-4">
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white w-full"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleSignup}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white w-full"
                >
                  Signup
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Appbar;