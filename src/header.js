import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Update document body class based on dark mode state
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>

        <div className="logo" ><Link to="/">UniCode</Link></div>
        <nav className="nav">
          <ul>
            <li><Link to="/hackathon">Hackathon</Link></li>
            <li><Link to="/project">Opensource</Link></li>
            <li><Link to="/contact">contact</Link></li>

          </ul>
        </nav>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Mode' : 'Mode'}
        </div>
      </header>

      <p className='ram'>Welcome to unicode</p>
    </>
  );
};

export default Header;

