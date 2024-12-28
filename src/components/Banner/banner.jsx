import React from "react";
import './banner.css';
import { Link } from "react-router-dom";

import bannerImage from '../../images/rice-field-1866498_1920.jpg';

const Banner = () => {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="banner-content align-self-end mb-5">
      <Link className="nav-link" to="/products"><button className="explore-btn rounded-pill ">Explore</button>
      </Link>

      </div>
    </section>
  );
};

export default Banner;
