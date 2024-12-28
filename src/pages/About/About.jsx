import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";

const About = () => {
    const [isSticky, setIsSticky] = useState(true);
  
  return (
    <div class="mt-5">
      <Header isSticky={isSticky} />
      <h1>About Us</h1>
      <p>This is the about page content.</p>
    </div>
  );
};

export default About;
