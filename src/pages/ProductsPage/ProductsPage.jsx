import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";

const ProductsPage = () => {
  const [isSticky, setIsSticky] = useState(true);

  return (
    <div class="mt-5">
      <Header isSticky={isSticky} />
    </div>
  );
};

export default ProductsPage;