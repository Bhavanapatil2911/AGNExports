import React from "react";
import "./footer.css";

import footerimage from '../../images/footerBg.jpg';

const Footer = () => {
  return (
    <footer 
      className="footer"
      style={{
      backgroundImage: `url(${footerimage})`,
    }}
    >
      <div className="row">

      </div>
      <p>© 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
