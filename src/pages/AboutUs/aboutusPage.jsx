import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Visionmission from "../../components/Visionmission/Visionmission.jsx"

const AboutUs = () => {
  const [isSticky, setIsSticky] = useState(false);
  return (
    <div>
      <Visionmission />
    </div>
  );
};

export default AboutUs;
