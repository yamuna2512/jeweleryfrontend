// src/reducks/cart/selectors.js
import { createSelector } from "reselect";

//  Input selector: gets the cart slice from state
const selectCartState = (state) => state.carts || { results: [], totalPrice: 0, totalCart: 0, totalCartItems: 0 };

//  Selector for cart items
export const getCarts = createSelector(
  [selectCartState],
  (cartState) => cartState.results || []
);

// Selector for total price
export const getTotalCartPrice = createSelector(
  [selectCartState],
  (cartState) => cartState.totalPrice || 0
);

// Selector for total number of carts
export const getTotalCartCount = createSelector(
  [selectCartState],
  (cartState) => cartState.totalCart || 0
);

//  Selector for total number of cart items
export const getTotalCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.totalCartItems || 0
);
