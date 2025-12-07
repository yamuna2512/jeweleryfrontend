
import React from "react";

const ProductCard = ({ product, onAdd }) => {
  
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image || product.thumbnail || "https://via.placeholder.com/300x300?text=No+Image"} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">₹{product.price ?? product.price_inr ?? "—"}</p>
        <button className="add-btn" onClick={() => onAdd && onAdd(product.id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
