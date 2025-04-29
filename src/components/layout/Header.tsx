import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <Link href="/" className="font-bold text-xl">
            JobPortal
          </Link>
        </div>
        <div>
          <span className="text-sm">Find your dream job today</span>
        </div>
      </div>
    </header>
  );
};

export default Header;