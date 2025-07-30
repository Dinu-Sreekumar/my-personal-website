// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Leftmost Home Link - Always visible */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition duration-300" onClick={closeMenu}>
          Home
        </Link>

        {/* Desktop Navigation Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white text-lg font-medium transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-300 hover:text-white text-lg font-medium transition duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="text-gray-300 hover:text-white text-lg font-medium transition duration-300">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white text-lg font-medium transition duration-300">Contact</Link>
          </li>
        </ul>

        {/* Hamburger/Close Icon - Visible only on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Slides in from the right */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col overflow-y-auto z-50 // ADDED z-50 here
        `}
      >
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-4xl focus:outline-none">
          <IoClose />
        </button>
        <ul className="flex flex-col items-center space-y-6 pt-20 pb-10 w-full text-xl">
          <li>
            <Link to="/" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMenu}>Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;