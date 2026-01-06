// Action types
export const FETCH_CARTS = "FETCH_CARTS";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CLEAR_CARTS = "CLEAR_CARTS";

// Action creators
export const fetchCartsAction = (carts) => ({
  type: FETCH_CARTS,
  payload: { carts },
});

export const addCartAction = (cart) => ({
  type: ADD_CART,
  payload: { cart },
});

export const updateCartAction = (cart) => ({
  type: UPDATE_CART,
  payload: { cart },
});

export const removeCartAction = (cartId) => ({
  type: REMOVE_CART,
  payload: { cartId },
});

export const clearCartsAction = () => ({
  type: CLEAR_CARTS,
});
