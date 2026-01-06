
import React from "react";
import { useHistory } from "react-router-dom";
import "../../assets/styles/homepage.css";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../reducks/wishlist/operations";
// import { getWishlist } from "../../reducks/wishlist/selectors";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const imageUrl =
    product?.product_image && typeof product.product_image === "string"
      ? product.product_image
      : "/placeholder.png";

  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = "/placeholder.jpg";
  };

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.list);

  const isWishlisted = wishlist.some(
    (item) => item.product === product.id
  );

 const handleWishlist = (e) => {
       e.stopPropagation();
       e.preventDefault();
       dispatch(toggleWishlist(product.id));
  };


  return (
    <div
      className="product-card"
      onClick={() => history.push(`/product/${product.id}`)}
    >
      <div className="product-image-wrapper">
        <img
          src={product.product_image || "/placeholder.jpg"}
          alt={product.product_name}
        />

        {/*  HEART */}
        <FaHeart
          
          onClick={handleWishlist}
          className="wishlist-heart"
          style={{
            color: isWishlisted ? "red" : "#ccc",
            cursor: "pointer",
          }}
        />
      </div>

      <div className="product-info">
        <h4>{product.product_name}</h4>
        <p className="sku">SKU: {product.sku}</p>
        <p className="weight">{product.weight} g</p>
        <p className="price">₹ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
