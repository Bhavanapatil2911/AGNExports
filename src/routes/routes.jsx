// src/routes/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
