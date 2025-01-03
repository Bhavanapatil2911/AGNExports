import React from "react";
import "./about.css";
import videoSrc from "../../images/184811-874264378_small.mp4";

const About = () => {
  return (
    <>
      <div className="row p-md-4 mx-md-4 m-2 aboutus d-flex justify-content-between">
        <div className="col-md-6">
          <div className="content m-md-5 px-md-5">
            <h1>About Us</h1>
            <span>Discover the Essence of Authentic Basmati Rice </span>
            <p>
              At AGN Exports, we bring you the finest Basmati rice from the
              heart of India, where tradition and quality meet. Our grains are
              carefully selected for their distinct aroma, taste, and texture,
              offering you a premium rice experience. Committed to sustainability
              and excellence, we ensure every grain reflects the rich heritage of
              Indian agriculture.
            </p>
            <span>Your Trusted Partner in Premium Basmati Rice</span>
            <p>
              Based in India, the world’s leading exporter of aromatic Basmati
              rice, AGN Exports is driven by a passion for quality and a
              commitment to ethical trade. With years of expertise in sourcing
              and exporting, we are dedicated to providing our global clients
              with the highest-quality Basmati rice and exceptional service. Our
              goal is simple – to bring the authentic taste of India’s premium
              rice to tables around the world.
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="video-container">
            <video 
              src={videoSrc} 
              autoPlay 
              loop 
              muted 
              type="video/mp4"
              className="video" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
