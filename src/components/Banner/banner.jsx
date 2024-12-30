import React from "react";
import './banner.css';
import { Link } from "react-router-dom";

// Ensure the correct path to your image is used.
import bannerImage from '../../images/rice-field-1866498_1920.jpg';
import taglineImage from '../../images/Your_ptagline_aragraph_text-removebg-preview.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="zoom-out-background">
        <div className="banner-content d-flex flex-column align-items-center">
          {/* <span className="tagline">Your Tagline Here</span> */}
          <Link className="nav-link" to="/products">
            <button className="explore-btn rounded-pill">Explore</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
