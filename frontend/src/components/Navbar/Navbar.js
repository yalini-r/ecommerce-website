import React, { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons"; // 🆕 Added hamburger icon
import { ShopContext } from "../../context/shopContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsActive(!isActive);
  };

  // Automatically close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
    setIsActive(false);
  }, [location]);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Hamburger Icon (only visible on mobile) */}
      <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="burger-icon-fa" />
      </div>

      {/* Navigation Menu (slides in from left on mobile) */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Font Awesome Close Icon */}
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={toggleMenu}
        />

        <li>
          <Link className="nav-link" to="/" onClick={toggleMenu}>
            Shop
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/mens" onClick={toggleMenu}>
            Mens
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/womens" onClick={toggleMenu}>
            Womens
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/kids" onClick={toggleMenu}>
            Kids
          </Link>
        </li>
      </ul>

      {/* Login + Cart Section */}
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
