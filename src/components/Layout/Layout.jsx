// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      {/* <HeaderNew /> */}
      <main>
        <Outlet /> {/* This renders child components (Home, About, etc.) */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
