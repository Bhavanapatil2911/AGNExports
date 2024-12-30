import React from "react";
import './banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="zoom-out-background"></div>
      <div className="banner-content d-flex flex-column align-items-center">
        <Link className="nav-link" to="/products">
          <button className="explore-btn rounded-pill">Explore</button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
