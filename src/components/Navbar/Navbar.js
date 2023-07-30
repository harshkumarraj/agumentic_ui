import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import Bicycle from '../../assets/bicycle-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo and Company Name */}
        <div className="navbar__logo">
          <img src={Bicycle} alt="Bicycle Logo" className="navbar__logo-img"  />
          <span className="navbar__company-name" style={{fontFamily:'fantasy'}}>bicycle</span>
        </div>

        {/* Navigation Menu */}
        <ul className="navbar__menu">
          <li className="navbar__item">Bike</li>
          <li className="navbar__item">Accessories</li>
          <li className="navbar__item">Clothing</li>
          <li className="navbar__item">Parts</li>
          <li className="navbar__item">Sales</li>
          <li className="navbar__item">Blog</li>
        </ul>

        {/* Icons */}
        <div className="navbar__icons">
          <FaSearch className="navbar__icon" />
          <FaShoppingCart className="navbar__icon" />
          <FaUser className="navbar__icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
