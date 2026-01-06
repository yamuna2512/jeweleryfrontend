import React from "react";
import ProductCard from "./productcard";
import "../../assets/styles/homepage.css";

const ProductListCard = ({ products }) => {
  if (!products || products.length === 0)
    return <p>No products available in this category.</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  
  );
};

export default ProductListCard;
