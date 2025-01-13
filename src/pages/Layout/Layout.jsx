// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNew from "../../components/HeaderNew/HeaderNew";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <HeaderNew />
      <main>
        <Outlet /> {/* This renders child components (Home, About, etc.) */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
