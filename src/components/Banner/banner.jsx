import React from "react";
import './banner.css';
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
        <button className="explore-btn rounded-pill mb-4">Explore</button>
      </div>
    </section>
  );
};


export default Banner;
