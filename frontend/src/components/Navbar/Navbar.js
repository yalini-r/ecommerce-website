import React, { useContext, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../../context/shopContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [isActive, setIsActive] = useState(false); // State to toggle hamburger icon transformation
   
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
    setIsActive(!isActive); // Toggle the hamburger icon transformation
  };

  const { getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Hamburger Menu Icon for mobile */}
      <div className={`burger-menu ${isActive ? "active" : ""}`} onClick={toggleMenu}>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
      </div>

      {/* Navigation Menu (this will slide in from left) */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link className="nav-link" to="/">Shop</Link>
        </li>
        <li>
          <Link className="nav-link" to="/mens">Mens</Link>
        </li>
        <li>
          <Link className="nav-link" to="/womens">Womens</Link>
        </li>
        <li>
          <Link className="nav-link" to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/cart">
          <div className="cart-icon">
            <img src={cart_icon} alt="Cart" />
            <div className="cart-count">{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
