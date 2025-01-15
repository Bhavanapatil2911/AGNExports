import React, { useState } from "react";
import "./ProductsPage.scss"; // Include styles for better presentation
// import Header from "../../components/Header/Header.jsx";
import BasmatiRicePage from "../../components/Products/BasmatiRicePage";
import NonBasmatirice from "../../components/Products/NonBasmatirice";
import PestisideFree from "../../components/Products/PestisideFree";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Basmati Rice"); // Track active category

  const handleCategoryClick = (category) => {
    // Toggle the active category
    setActiveCategory(prevCategory => (prevCategory === category ? null : category));
  };

  return (
    <div className="Product">
      <div className="text-center d-flex flex-column justify-content-center">
        <div className="productsheader p-5">
          <h1 className="">Our Products</h1>
          <p className="text-center w-50 mx-auto">
            Whether you're a retailer, wholesaler, or distributor, our products are tailored to meet your specific needs, ensuring consistency and excellence in every grain.
          </p>
        </div>
        <div className="row m-5">
          <div className="col-md-3 col-12 mb-3">
            <ul className="rice-varieties p-0">
              <li onClick={() => handleCategoryClick("Basmati Rice")}>
                Basmati Rice&nbsp;
                <i className={`fa-solid fa-angle-${activeCategory === "Basmati Rice" ? "up" : "down"}`}></i>
              </li>
              <li onClick={() => handleCategoryClick("Non Basmati Rice")}>
                Non-Basmati Rice&nbsp;
                <i className={`fa-solid fa-angle-${activeCategory === "Non Basmati Rice" ? "up" : "down"}`}></i>
              </li>
              <li onClick={() => handleCategoryClick("Pesticide Free Rice")}>
                Pesticide-Free Rice&nbsp;
                <i className={`fa-solid fa-angle-${activeCategory === "Pesticide Free Rice" ? "up" : "down"}`}></i>
              </li>
              <li onClick={() => handleCategoryClick("Other Varieties Rice")}>
                Other Varieties&nbsp;
                <i className={`fa-solid fa-angle-${activeCategory === "Other Varieties Rice" ? "up" : "down"}`}></i>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-12">
            {activeCategory === "Basmati Rice" && <BasmatiRicePage />}
            {activeCategory === "Non Basmati Rice" && <NonBasmatirice />}
            {activeCategory === "Pesticide Free Rice" && <PestisideFree />}
            {/* Add any other components for other categories if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
