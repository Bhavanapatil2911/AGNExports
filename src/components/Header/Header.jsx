import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
const Header = ({ isSticky }) => {
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav class="d-flex justify-content-between">
        <img src="src/assets/AGNLogo.png" alt="" class="logo"/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Our Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



