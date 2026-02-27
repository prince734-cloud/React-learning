
import React from 'react';

const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 w-full bg-gray-100 text-gray-600 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0">
        © {new Date().getFullYear()} YourCompany —{' '}
        <a href="/privacy" className="underline hover:text-gray-800">Privacy Policy</a> |{' '}
        <a href="/terms" className="underline hover:text-gray-800">Terms of Service</a>
      </div>
      <div className="flex space-x-4 text-center">
        <a href="https://twitter.com/YourHandle" className="hover:text-gray-800">Twitter</a>
        <a href="https://github.com/YourHandle" className="hover:text-gray-800">GitHub</a>
        <a href="https://linkedin.com/in/YourHandle" className="hover:text-gray-800">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
