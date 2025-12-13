import React from "react";
import ProductCard from "./productcard";

const ProductListCard = ({ products }) => {
  return (
    <div className="product-grid">
      {products &&
        products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
    </div>
  );
};

export default ProductListCard;
