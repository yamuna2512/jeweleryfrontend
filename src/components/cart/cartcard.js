
import React from "react";
import "../../assets/styles/cart.css";

const CartCard = ({ cart, onUpdate, onRemove }) => {
  return (
    <div className="cart-card">
      <img src={cart.product.image} alt={cart.product.name} />

      <div className="cart-info">
        <h4>{cart.product.name}</h4>
        <p className="cart-price">${cart.total_price}</p>
        <p>Qty: {cart.quantity}</p>

        <div className="cart-actions">
          <button
            className="btn-add"
            onClick={() => onUpdate(cart.id, cart.quantity + 1)}
          >
            +
          </button>

          <button
            className="btn-remove"
            onClick={() => onRemove(cart.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
