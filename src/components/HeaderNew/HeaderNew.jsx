import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import MainLogo from "../../Pictures/logoemtycropped.png";
import './HeaderNew.scss';

const HeaderNew = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);  // for mobile menu toggle
  const location = useLocation();

  const toggleStick = () => {
    setDropdownOpen(!dropdownOpen);  // Toggle dropdown open/close state
  };

  useEffect(() => {
    setDropdownOpen(false);  // Close the dropdown when route changes
  }, [location]);

  return (
    <>
      <header>
        <div className="contactdetails">
          {/* Your contact details can go here */}
        </div>
        <nav className="navbar navbar-expand-lg  px-md-5">
          <div className="d-flex justify-content-between px-4">
            <div className="navbar-brand">
              <Link to="/"><img src={MainLogo} alt="Logo" className="logo" /></Link>
            </div>

            {/* Hamburger button (mobile view toggle) */}
            <button 
              className="navbar-toggler rounded-circle" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav"
              aria-expanded={dropdownOpen ? "true" : "false"} 
              aria-label="Toggle navigation" 
              onClick={toggleStick} 
            >
              <span className="navbar-icon">
                <i className="bi bi-list m-0"></i> {/* Hamburger icon */}
              </span>
            </button>
            </div>

            {/* Navbar collapse */}
            <div 
              className={`collapse navbar-collapse mb-2 ${dropdownOpen ? 'show' : ''}`} 
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className={`nav-item px-2 ${location.pathname === '/' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className={`nav-item px-2 ${location.pathname === '/about' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className={`nav-item px-2 ${location.pathname === '/products' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/products">Our Products</Link>
                </li>
                <li className={`nav-item px-2 ${location.pathname === '/contact' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <button className="quotebtn align-content-around">Get a Quote</button>
                </li>
              </ul>
            </div>

        </nav>
      </header>
    </>
  );
};

export default HeaderNew;
