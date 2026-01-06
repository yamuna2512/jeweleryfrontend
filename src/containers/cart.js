import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/cart/cartcard";
import { fetchCarts, updateCart, removeCart } from "../reducks/cart/operations";
import { getCartItems, getCartTotal } from "../reducks/cart/selectors";
import "../assets/styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getCartItems);
  const total = useSelector(getCartTotal);

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>

      {carts.length === 0 && (
        <p className="cart-empty">Your cart is empty</p>
      )}

      {carts.map((cart) => (
        <CartCard
          key={cart.id}
          cart={cart}
          onUpdate={(id, qty) => dispatch(updateCart({ quantity: qty }, id))}
          onRemove={(id) => dispatch(removeCart(id))}
        />
      ))}

      {carts.length > 0 && (
        <div className="cart-total">Total: ${total}</div>
      )}
    </div>
  );
};

export default Cart;
