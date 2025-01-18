import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/banner.jsx";
import Bannernew from "../../components/BannerNew/BannerNew.jsx"
// import WhyChooseUs from "../../components/WhyChooseUs/whychooseus.jsx";
import About from "../../components/About/About.jsx";
import BasmatiRicePage from "../../components/Products/BasmatiRicePage.jsx";
import Wedeal from "../../components/Wedeal/Wedeal.jsx"
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo.jsx";
import Visionmission from "../../components/Visionmission/Visionmission.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Home.css'; // Optional for homepage-specific styling
import HeaderNew from "../../components/HeaderNew/HeaderNew.jsx";

import BannerSection from "../../components/BannerSection/BannerSection.jsx"
import WHYCHOOSEUS from "../../components/WHYCHOOSEUS/WHYCHOOSEUS.jsx"
import RICEWEDEAL from "../../components/RICEWEDEAL/RICEWEDEAL.jsx"
import WHATDOWEDO from "../../components/WHATDOWEDO/WHATDOWEDO.jsx"


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
      <div className="backgroundsection">

      </div>
      {/* <Header isSticky={isSticky} /> */}
      {/* <HeaderNew /> */}
      <Bannernew />
      {/* <BannerSection/> */}
      {/* <WhyChooseUs /> */}
      <WHYCHOOSEUS/>
      {/* <Wedeal/> */}
      <RICEWEDEAL/>
      {/* <WhatWeDo />  */}
      {/* <WHATDOWEDO/> */}
      <About />

      <button className="navigator rounded-circle" onClick={scrollToTop}><i class="fa-solid fa-arrow-up"></i></button>
    </div>
  );
};

export default Home;
