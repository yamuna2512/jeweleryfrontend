import React from "react";
import { Link } from "react-router-dom";

const CartLink = ({ totalItems }) => {
  return (
    <Link to="/cart" className="cart-link">
      Cart ({totalItems})
    </Link>
  );
};

export default CartLink;