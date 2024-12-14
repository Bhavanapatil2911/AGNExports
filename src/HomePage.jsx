import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <nav className="navbar">
          <div className="logo">ExportBiz</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Your Trusted Export Partner</h1>
          <p>Delivering excellence across borders</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
