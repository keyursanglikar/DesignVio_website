import React, { useState } from "react";
import { Menu, X } from "lucide-react";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-red-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold">
            <a href="/">RaktSetu</a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>

          {/* Hamburger Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 font-medium bg-red-500">
            <li><a href="/" className="block hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="block hover:text-yellow-300">About</a></li>
            <li><a href="/contact" className="block hover:text-yellow-300">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-700">Welcome to RaktSetu</h1>
        <p className="mt-4 text-gray-700">Connecting lives through blood donations.</p>
      </div>
    </div>
  );
};

export default Home;
