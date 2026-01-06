// import { createSelector } from "reselect";

// const cartsSelector = (state) => state.cart;
// // Selectors for cart
// export const getCarts = (state) => state.cart;

// export const getCartItems = (state) => state.cart.results;

// export const getCartTotal = (state) => state.cart.totalPrice;

// export const getCartCount = (state) => state.cart.totalCartItems;

// Cart base selector
const cartSelector = (state) => state.cart || {
  results: [],
  totalPrice: 0,
  totalCart: 0,
  totalCartItems: 0,
};

// Selectors
export const getCarts = (state) => cartSelector(state).results;

export const getCartItems = (state) => cartSelector(state).results;

export const getCartTotal = (state) => cartSelector(state).totalPrice;

export const getCartCount = (state) => cartSelector(state).totalCartItems;
