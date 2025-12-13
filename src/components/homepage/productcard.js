
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-img"
      />

      <p className="product-name">{product.name}</p>
    </div>
  );
};

export default ProductCard;
