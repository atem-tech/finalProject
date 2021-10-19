import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1>Product page</h1>
    </div>
  );
};

export default Product;
