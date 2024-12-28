import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import MainLogo from "../../images/AGN-Photoroom4x3.png";

const Header = ({ isSticky }) => {
  // Using useState to track whether the navbar is sticky
  const [stickbool, setstickbool] = useState(false);

  // Function to toggle the stickbool state
  const toggleStick = () => {
    setstickbool(!stickbool);
  };

  return (
    <header className={`header ${isSticky || stickbool ? 'sticky' : ''}`}>
      <div className="contactdetails">
        {/* Your contact details can go here */}
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg">

          <div className="navbar-brand">
            <Link to="/"><img src={MainLogo} alt="Logo" className="logo" /></Link>
          </div>

          <button 
            className="navbar-toggler rounded-circle" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false"
            aria-label="Toggle navigation" 
            onClick={toggleStick} // Corrected here
          >
            <span className="navbar-icon">
              <i className="bi bi-list m-0"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse mb-2 justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/products">Our Products</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
