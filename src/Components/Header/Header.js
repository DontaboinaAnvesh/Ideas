import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, user } = useAuth(); // Access 'user' to check if authenticated
  const navigate = useNavigate();
  const logoText = 'Ideology';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="header-container">
      <div className="logo">
        <h1>
          {logoText.split('').map((char, index) => (
            <span key={index} className={`letter letter-${index}`}>
              {char}
            </span>
          ))}
        </h1>
      </div>

      <div className="nav-container">
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/ideas-submit">Ideas</Link></li>
            <li><Link to="/ideas-gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            {user && ( // Only show logout button if user is authenticated
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            )}
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          
        </button>
       
      </div>
    </div>
  );
};

export default Header;
