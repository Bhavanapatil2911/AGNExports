import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";

const Products = () => {
  const [isSticky, setIsSticky] = useState(true);

  return (
    <div class="mt-5">
      <Header isSticky={isSticky} />
      <h1>Products Us</h1>
      <p>This is the Product page content.</p>
    </div>
  );
};

export default Products;