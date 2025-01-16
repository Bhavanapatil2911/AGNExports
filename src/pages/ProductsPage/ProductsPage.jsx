import React, { useState, useEffect } from 'react';
import "./ProductsPage.scss"; // Include styles for better presentation
import BasmatiRicePage from "../../components/Products/BasmatiRicePage";
import NonBasmatirice from "../../components/Products/NonBasmatirice";
import PestisideFree from "../../components/Products/PestisideFree";
import Rice1211 from "../../components/Products/Rice1121";
import Rice1718 from "../../components/Products/Rice1718"
import Rice1509 from "../../components/Products/Rice1509"
import Rice1401 from "../../components/Products/Rice1401"
import Pusabasmati from '../../components/Products/Pusabasmati';
import Traditionalrice from '../../components/Products/Traditionalrice';

const ProductsPage = () => {
  // Track only the active product (either a category or a subcategory)
  const [activeProduct, setActiveProduct] = useState("Basmati Rice");

  const handleProductClick = (product, e) => {
    // Stop the event from propagating to the parent <li> when subcategory is clicked
    if (e) e.stopPropagation();  // Stop propagation to avoid triggering the category click
    setActiveProduct(product);  // Set the clicked category or subcategory
  };

  useEffect(() => {
    console.log(activeProduct);  // Log active product for debugging
  }, [activeProduct]);

  return (
    <div className="Product">
      <div className="text-center d-flex flex-column justify-content-center">
        <div className="productsheader p-md-5 p-3">
          <h1>Our Products</h1>
          <p className="text-center w-md-50 mx-auto">
            Whether you're a retailer, wholesaler, or distributor, our products are tailored to meet your specific needs, ensuring consistency and excellence in every grain.
          </p>
        </div>
        <div className="row m-md-5 px-md-5 p-3">
          <div className="col-md-3 col-12 mb-3">
            <ul className="ricetype p-0">
              {/* Basmati Rice Category */}
              <li onClick={(e) => handleProductClick("Basmati Rice", e)}>
                Basmati Rice&nbsp;
                <ul className="subcategory">
                  <li onClick={(e) => handleProductClick("Rice1211", e)}>
                    BASMATI RICE 1121
                  </li>
                  <li onClick={(e) => handleProductClick("Rice1718", e)}>
                    1718 BASMATI RICE
                  </li>
                  <li onClick={(e) => handleProductClick("Rice1509", e)}>1509 BASMATI RICE</li>
                  <li onClick={(e) => handleProductClick("Rice1401", e)}>1401 BASMATI RICE</li>
                  <li onClick={(e) => handleProductClick("Pusabasmati", e)}>PUSA BASMATI RICE</li>
                  <li onClick={(e) => handleProductClick("Traditionalrice", e)}>TRADITIONAL BASMATI RICE</li>
                </ul>
              </li>

              {/* Non-Basmati Rice Category */}
              <li onClick={(e) => handleProductClick("Non Basmati Rice", e)}>
                Non-Basmati Rice&nbsp;
                <ul className="subcategory">
                  <li onClick={(e) => handleProductClick("SUGANDHA", e)}>SUGANDHA RICE</li>
                  <li onClick={(e) => handleProductClick("SHARBATI", e)}>SHARBATI RICE</li>
                  <li onClick={(e) => handleProductClick("PR11", e)}>PR 11 RICE</li>
                  <li onClick={(e) => handleProductClick("PR14", e)}>PR 14 RICE</li>
                  <li onClick={(e) => handleProductClick("PARMAL", e)}>PARMAL RICE</li>
                  <li onClick={(e) => handleProductClick("SONAMASOORI", e)}>SONA MASOORI RICE</li>
                </ul>
              </li>
              
              {/* Pesticide-Free Rice Category */}
              <li onClick={(e) => handleProductClick("Pesticide Free Rice", e)}>
                Pesticide-Free Rice&nbsp;
                <ul className="subcategory">
                  <li onClick={(e) => handleProductClick("PESTICIDE_RAW", e)}>PESTICIDE FREE RAW RICE</li>
                  <li onClick={(e) => handleProductClick("PESTICIDE_STEAM", e)}>PESTICIDE FREE STEAM RICE</li>
                  <li onClick={(e) => handleProductClick("PESTICIDE_SELLA", e)}>PESTICIDE FREE SELLA RICE</li>
                  <li onClick={(e) => handleProductClick("PESTICIDE_GOLDEN", e)}>PESTICIDE FREE GOLDEN SELLA RICE</li>
                </ul>
              </li>

              {/* Other Varieties Rice Category */}
              <li onClick={(e) => handleProductClick("Other Varieties Rice", e)}>
                Other Varieties&nbsp;
                <ul className="subcategory">
                  <li onClick={(e) => handleProductClick("Brown Rice", e)}>Brown Rice</li>
                  <li onClick={(e) => handleProductClick("Broken Rice", e)}>Broken Rice</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="col-md-9 col-12">
            {/* Conditional rendering based on the active product */}
            {activeProduct === "Basmati Rice" && <BasmatiRicePage />}
            {activeProduct === "Non Basmati Rice" && <NonBasmatirice />}
            {activeProduct === "Pesticide Free Rice" && <PestisideFree />}
            {activeProduct === "Rice1211" && <Rice1211 />}
            {activeProduct === "Rice1718" && <Rice1718 />}
            {activeProduct === "Rice1509" && <Rice1509 />}
            {activeProduct === "Rice1401" && <Rice1401 />}
            {activeProduct === "Pusabasmati" && <Pusabasmati />}
            {activeProduct === "Traditionalrice" && <Traditionalrice />}

            {/* Add more components for other subcategories as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
