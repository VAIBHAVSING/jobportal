import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-3">JobPortal</h3>
            <p className="text-gray-400">
              Find your dream job with our secure job portal platform.
            </p>
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/jobs" className="text-gray-400 hover:text-white">Jobs</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-gray-400 hover:text-white">Login</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-white">Register</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-400 mb-2">Email: support@jobportal.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;