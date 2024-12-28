import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import footerimage from "../../images/footerBg.jpg";

const Footer = () => {
  return (
    <footer
      className="footer p-5"
      style={{
        backgroundImage: `url(${footerimage})`,
      }}
    >
      <div className="container">
        <div className="row">
          {/* Empty first column */}
          <div className="col-md-4">
            {/* Empty */}
          </div>

          {/* Second column with Quick Links */}
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Our Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Third column with Contact Details and Social Media Icons */}
          <div className="col-md-4">
            <h4>Contact Details</h4>
            <ul>
              <li>
                <strong>Address:</strong> Nandya, Street No. 25, Kurnool, Andhra Pradesh 518001, India
              </li>
              <li>
                <strong>Phone:</strong> +91 9876543210
              </li>
              <li>
                <strong>Email:</strong> info@example.com
              </li>
            </ul>

            <h4>Follow Us</h4>
            <ul className="social-media d-flex gap-3 justify-content-center">
              <li >
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>© 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
