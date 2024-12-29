// src/routes/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import ContactUs from "../pages/ContactUs/ContactUs.jsx";
import Products from "../pages/Products/Products.jsx";
import ContactForm from "../components/Form/ContactForm.jsx"

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<ContactForm />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
