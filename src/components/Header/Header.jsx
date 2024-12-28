import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Use useLocation to track route changes
import "./header.css";
import MainLogo from "../../images/AGN-Photoroom4x3.png";

const Header = ({ isSticky }) => {
  // State to track if the navbar is sticky and dropdown state
  const [stickbool, setstickbool] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Track the current location to close the dropdown when navigating
  const location = useLocation();

  // Function to toggle the dropdown state
  const toggleStick = () => {
    setstickbool(!stickbool);
    setDropdownOpen(!dropdownOpen); // Toggle dropdown open/close
  };

  // Close the dropdown when the route changes
  useEffect(() => {
    setDropdownOpen(false); // Close the dropdown on route change
  }, [location]);

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
            aria-expanded={dropdownOpen ? "true" : "false"} // Toggle expanded state based on dropdown state
            aria-label="Toggle navigation" 
            onClick={toggleStick} // Toggle the dropdown state
          >
            <span className="navbar-icon">
              <i className="bi bi-list m-0"></i>
            </span>
          </button>

          {/* <div className="collapse navbar-collapse mb-2 justify-content-end" id="navbarNav"> */}


          <div className={`collapse navbar-collapse mb-2  ${dropdownOpen ? 'show' : ''}`} id="navbarNav">
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
