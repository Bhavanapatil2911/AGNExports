import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/banner.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/whychooseus.jsx";
import About from "../../components/About/About.jsx";
import Products from "../../components/Products/Products.jsx";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo.jsx";
import Visionmission from "../../components/Visionmission/Visionmission.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Home.css'; // Optional for homepage-specific styling

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Header isSticky={isSticky} />
      <Banner />
      <About />
      <Products />
      <WhyChooseUs />
      <WhatWeDo />
      {/* <Footer /> */}
      <button className="navigator rounded-circle" onClick={scrollToTop}><i class="fa-solid fa-arrow-up"></i></button>
    </div>
  );
};

export default Home;
