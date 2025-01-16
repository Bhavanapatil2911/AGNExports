import React, { useState, useEffect } from 'react';
import "./ProductsPage.scss"; // Include styles for better presentation
import BasmatiRicePage from "../../components/Products/BasmatiRicePage";
import NonBasmatirice from "../../components/Products/NonBasmatirice";
import PestisideFree from "../../components/Products/PestisideFree";
import Rise1211 from "../../components/Products/Rice-1121";

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
        <div className="row m-5">
          <div className="col-md-3 col-12 mb-3">
            <ul className="ricetype p-0">
              {/* Basmati Rice Category */}
              <li onClick={(e) => handleProductClick("Basmati Rice", e)}>
                Basmati Rice&nbsp;
                <ul className="subcategory">
                  <li onClick={(e) => handleProductClick("Rise1211", e)}>
                    BASMATI RICE 1121
                  </li>
                  <li onClick={(e) => handleProductClick("Rise1718", e)}>
                    1718 BASMATI RICE
                  </li>
                  <li onClick={(e) => handleProductClick("1509", e)}>1509 BASMATI RICE</li>
                  <li onClick={(e) => handleProductClick("1401", e)}>1401 BASMATI RICE</li>
                  <li onClick={(e) => handleProductClick("PUSA", e)}>PUSA BASMATI RICE</li>
                  <li onClick={(e) => handleProductClick("TRADITIONAL", e)}>TRADITIONAL BASMATI RICE</li>
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
          
          <div className="col-md-8 col-12">
            {/* Conditional rendering based on the active product */}
            {activeProduct === "Basmati Rice" && <BasmatiRicePage />}
            {activeProduct === "Non Basmati Rice" && <NonBasmatirice />}
            {activeProduct === "Pesticide Free Rice" && <PestisideFree />}
            {activeProduct === "Rise1211" && <Rise1211 />}
            {activeProduct === "Rise1718" && <div>1718 BASMATI RICE Page</div>} {/* Example placeholder for another subcategory */}
            {/* Add more components for other subcategories as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
