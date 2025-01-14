
import React, { useState } from "react";
import "./ProductsPage.css"; // Include styles for better presentation
// import Header from "../../components/Header/Header.jsx";
import BasmatiRicePage from "../../components/Products/BasmatiRicePage"


const ProductsPage = () => {
  const [isSticky, setIsSticky] = useState(true);

  const [activeDropdown, setActiveDropdown] = useState({});
  
  // Rice categories data with nested varieties
  const riceCategories = {
    "Basmati Rice": {
      "1121 Basmati Rice": [
        "1121 Raw Basmati Rice",
        "1121 Steam Basmati Rice",
        "1121 Sella Basmati Rice",
        "1121 Golden Sella Basmati Rice",
      ],
      "1509 Basmati Rice": [
        "1509 Steam Basmati Rice",
        "1509 Sella Basmati Rice",
        "1509 Golden Sella Basmati Rice",
      ],
      "Traditional Basmati Rice": [
        "Traditional Raw Basmati Rice",
        "Traditional Sella Basmati Rice",
      ],
    },
    "Non Basmati Rice": {
      "Sugandha Rice": [
        "Sugandha Raw Rice",
        "Sugandha Steam Rice",
        "Sugandha Sella Rice",
        "Sugandha Golden Sella Rice",
      ],
      "Sharbati Rice": [
        "Sharbati Raw Rice",
        "Sharbati Steam Rice",
        "Sharbati Sella Rice",
        "Sharbati Golden Sella Rice",
      ],
    },
    "Pesticide Free Rice": {
      "Raw Rice": ["1401 Pesticide Free Raw Rice", "Pusa Pesticide Free Raw Rice"],
      "Steam Rice": [
        "1121 Pesticide Free Steam Rice",
        "1509 Pesticide Free Steam Rice",
      ],
    },
    "Other Varieties Rice": {
      "Brown Rice": [],
      "Broken Rice": [],
    },
  };

  // Toggles dropdown visibility for nested levels
  const toggleDropdown = (category, subcategory = null) => {
    setActiveDropdown((prevState) => {
      const key = subcategory ? `${category}-${subcategory}` : category;
      return { ...prevState, [key]: !prevState[key] };
    });
  };

  return (
    <div className="mt-5">
    <div className="container text-center d-flex flex-column justify-content-center">
      <h1 className="">Our Products</h1>
      <p className="text-center w-75 mx-auto">
        Whether you're a retailer, wholesaler, or distributor, our products are tailored to meet your specific needs, ensuring consistency and excellence in every grain.
      </p>
      <div className="row mt-5">
        <div className="col-md-3 col-12 mb-3">
          <ul className="rice-varieties">
            <li>Basmati Rice <i className="fa-solid fa-angle-down"></i></li>
            <li>Non-Basmati Rice <i className="fa-solid fa-angle-down"></i></li>
            <li>Pesticide-Free Rice <i className="fa-solid fa-angle-down"></i></li>
            <li>Other Varieties <i className="fa-solid fa-angle-down"></i></li>
          </ul>
        </div>
        <div className="col-md-8 col-12">
          <BasmatiRicePage />

        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProductsPage;
