import React, { useState, useEffect } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <h1>Products page</h1>
    </div>
  );
};

export default Products;
