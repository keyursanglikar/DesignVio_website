import React, { useState } from "react";
import "./CSS"; // Import CSS file
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/">RaktSetu</a>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1>Welcome to RaktSetu</h1>
        <p>Connecting lives through blood donations.</p>
      </div>
    </div>
  );
};

export default Home;
