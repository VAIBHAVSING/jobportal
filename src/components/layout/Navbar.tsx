'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive('/')} text-base transition-colors duration-300`}>
              Home
            </Link>
            <Link href="/jobs" className={`${isActive('/jobs')} text-base transition-colors duration-300`}>
              Jobs
            </Link>
            {session && (
              <Link href="/dashboard" className={`${isActive('/dashboard')} text-base transition-colors duration-300`}>
                Dashboard
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {session.user?.name || session.user?.email}
                </span>
                <button 
                  onClick={() => signOut()}
                  className="text-sm bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded shadow-sm transition-colors duration-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="text-sm bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded shadow-sm transition-colors duration-300">
                    Log In
                  </button>
                </Link>
                <Link href="/register">
                  <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-sm transition-colors duration-300">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 py-3 border-t border-gray-200">
            <Link href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link href="/jobs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-gray-600 hover:text-gray-900"
            >
              Jobs
            </Link>
            {session && (
              <Link href="/dashboard" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </Link>
            )}
            
            <div className="pt-4 border-t border-gray-200">
              {session ? (
                <div className="space-y-3">
                  <span className="block text-sm text-gray-600">
                    Signed in as {session.user?.name || session.user?.email}
                  </span>
                  <button 
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-sm text-red-600 hover:text-red-700"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/login" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-sm bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded shadow-sm"
                  >
                    Log In
                  </Link>
                  <Link href="/register" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-sm"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;