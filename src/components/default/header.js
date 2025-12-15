import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/headerfooter.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">Divine Jewels</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="header-icons">
          <Link to="/wishlist">❤️</Link>
          <Link to="/cart">🛒</Link>
          <Link to="/sign-in">Signin </Link>
          <Link to="/sign-up"> Signup</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
