import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
// Importing css file
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://morning-waters-22506.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="product-text">All Our Services</h1>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
