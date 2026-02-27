import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-5 bg-gray-800 text-white shadow-md z-50">
      {/* Logo */}
      <div className="navbar__logo">
        <a href="/" className="text-xl font-bold px-4">
          OpenAI
        </a>
      </div>

      {/* Menu */}
      <ul className="navbar__menu flex space-x-6">
        <li><a href="/research" className="hover:text-gray-300">Research</a></li>
        <li><a href="/safety" className="hover:text-gray-300">Safety</a></li>
        <li><a href="/business" className="hover:text-gray-300">For Business</a></li>
        <li><a href="/developers" className="hover:text-gray-300">For Developers</a></li>
        <li><a href="/stories" className="hover:text-gray-300">Stories</a></li>
        <li><a href="/company" className="hover:text-gray-300">Company</a></li>
        <li><a href="/news" className="hover:text-gray-300">News</a></li>
      </ul>

      {/* Actions */}
      <div className="navbar__actions flex space-x-4">
        <a href="/login" className="border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-gray-800 transition">
          Log in
        </a>
        <a href="/chatgpt" className="bg-grey-500 px-4 py-2 rounded-xl hover:bg-grey-600 transition">
          Home
        </a>
      </div>
    </nav>
  );
};

export default Navbar;