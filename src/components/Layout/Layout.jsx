// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders child components (Home, About, etc.) */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
