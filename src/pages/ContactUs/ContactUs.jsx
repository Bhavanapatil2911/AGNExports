import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header.jsx";

const ContactUs = () => {
  const [isSticky, setIsSticky] = useState(true);
  
  return (
    <div class="mt-5">
      <h1>About Us</h1>
      <p>This is the about ContactUs content.</p>
    </div>
  );
};

export default ContactUs;