
import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';
import { FaMoon, FaSun, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">
          <span role="img" aria-label="logo">🎵</span> MediaSavvy
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/history">History</a>
          <a href="/about">About</a>
        </nav>

        <div className="nav-icons">
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="user-icon">
            <FaUserCircle />
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
