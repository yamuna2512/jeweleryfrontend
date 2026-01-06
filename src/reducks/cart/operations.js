import API from "../../api"; // Adjust path to your api.js
import {
  addCartAction,
  clearCartsAction,
  fetchCartsAction,
  removeCartAction,
  updateCartAction,
} from "./actions";

const api = new API();

// Fetch all carts
export const fetchCarts = () => {
  return (dispatch) => {
    return api.getCartItems().then((carts) => {
      dispatch(fetchCartsAction(carts));
    });
  };
};

// Add to cart
export const addCart = (addCartBody) => {
  return (dispatch) => {
    return api.addToCart(addCartBody).then((cart) => {
      dispatch(addCartAction(cart));
    });
  };
};

// Update cart
export const updateCart = (updateCartBody, cartId) => {
  return (dispatch) => {
    return api.updateCart(updateCartBody, cartId).then((cart) => {
      dispatch(updateCartAction(cart));
    });
  };
};

// Remove cart
export const removeCart = (cartId) => {
  return (dispatch) => {
    dispatch(removeCartAction(cartId));
  };
};

// Clear all carts
export const clearCarts = () => {
  return (dispatch) => {
    dispatch(clearCartsAction());
  };
};
