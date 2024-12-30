import React from "react";
import "./about.css";
import riceimage from "../../images/—Pngtree—basmati rice on wooden background_15524877.png"

const About = () => {
  return (
    <>
      <div className="row p-4 mx-4 aboutus">
        <div className="col-5">
          <img src={riceimage} alt="" />

        </div>
        <div className="col-7 px-5">
          <div className="content m-5 px-5">
            <h1>About Us</h1>

            <span>Discover the Essence of Authentic Basmati Rice </span>
            <p className="">
              At AGN Exports, we bring you the finest Basmati rice from the
              heart of India, where tradition and quality meet. Our grains are
              carefully selected for their distinct aroma, taste, and texture,
              offering you a premium rice experience. Committed to
              sustainability and excellence, we ensure every grain reflects the
              rich heritage of Indian agriculture.
            </p>
            <span> Your Trusted Partner in Premium Basmati Rice </span>
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
      </div>
    </>
  );
};

export default About;
