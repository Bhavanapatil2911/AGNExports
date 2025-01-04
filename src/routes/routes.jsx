// src/routes/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../components/About/About.jsx";
import ContactUs from "../pages/ContactUs/ContactUs.jsx";
import ProductsPage from "../pages/ProductsPage/ProductsPage.jsx";
import ContactForm from "../components/Form/ContactForm.jsx";
import AboutUs from "../pages/AboutUs/aboutusPage.jsx";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="form" element={<ContactForm />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
