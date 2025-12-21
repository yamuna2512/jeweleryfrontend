import React from "react";

import "../../assets/styles/homepage.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.product_image} alt={product.product_name} />
      <h4>{product.product_name}</h4>
      <p>₹ {product.price}</p>
    </div>
  );
};

export default ProductCard;
