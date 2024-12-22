import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"
const Header = () => {
  return (
    <header class="header">
      <nav class="d-flex justify-content-between">
        <img src="/assets/AGNLogo.png" alt="" class="logo"/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
