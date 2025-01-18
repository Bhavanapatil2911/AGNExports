import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

// import footerimage from "../../images/meadow-196567_1920.jpg";
import footerimage from "../../images/Footerbackground.jpeg";

const Footer = () => {
  return (
    <footer
      className="footer p-5"
      style={{
        backgroundImage: `url(${footerimage})`,
      }}
    >
      <div className="container-lg">
        <div className="row justify-content-around ">
          <div className="col-md-4">
            <iframe class="d-md-block d-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8866305278975!2d78.48183157452837!3d15.490529085108223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5ad5064dcd90d%3A0x665b1eda6d6198cc!2sAGN%20jewellers!5e0!3m2!1sen!2sin!4v1735492460835!5m2!1sen!2sin"
             width="500" height="400" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <iframe class="d-md-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8866305278975!2d78.48183157452837!3d15.490529085108223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5ad5064dcd90d%3A0x665b1eda6d6198cc!2sAGN%20jewellers!5e0!3m2!1sen!2sin!4v1735492460835!5m2!1sen!2sin"
              width="300" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          {/* Second column with Quick Links */}
          <div className="col-md-3">
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
                <strong>Address:</strong>
                <p className="text-center mt-0">AGN exports imports, Sri potti Sriramulu colony, Nandyal-518501 (Andhra Pradesh) India</p>
              </li>
              <li>
                <strong>Phone:</strong> <br />
                <span>+91 9849782405</span>
              </li>
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:gurusainath.saru@gmail.com"><span> Gurusainath.saru@gmail.com</span></a>
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
