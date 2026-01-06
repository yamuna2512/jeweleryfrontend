import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-page">
      <div className="details-container">

        {/* LEFT IMAGE */}
        <div className="details-image">
          <img src={product.product_image} alt={product.product_name} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="details-info">
          <h2>{product.product_name}</h2>
          <p className="sku">Product Code: {product.sku}</p>
          <p className="availability">Availability: In stock</p>

          <h3 className="price">₹ {product.price}</h3>

          <div className="meta">
            <p>Weight: {product.weight} g</p>
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
