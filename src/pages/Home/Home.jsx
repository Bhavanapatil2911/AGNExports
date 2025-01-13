import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/banner.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/whychooseus.jsx";
import About from "../../components/About/About.jsx";
import RiceCategories from "../../components/Products/RiceCategories.jsx";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo.jsx";
import Visionmission from "../../components/Visionmission/Visionmission.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Home.css'; // Optional for homepage-specific styling
import HeaderNew from "../../components/HeaderNew/HeaderNew.jsx";

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
      {/* <Header isSticky={isSticky} /> */}
      {/* <HeaderNew /> */}
      <Banner />
      <About />
      <WhyChooseUs />
      <RiceCategories />
      <WhatWeDo /> 
      <button className="navigator rounded-circle" onClick={scrollToTop}><i class="fa-solid fa-arrow-up"></i></button>
    </div>
  );
};

export default Home;
