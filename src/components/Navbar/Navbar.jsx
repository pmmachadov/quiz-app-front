import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">
          BrainRush
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="/plans" className="text-gray-700 hover:text-gray-900">
            Plans
          </a>
          <a href="/contacts" className="text-gray-700 hover:text-gray-900">
            Contacts
          </a>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            Log in
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
