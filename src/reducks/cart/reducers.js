import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CartsReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case Actions.FETCH_CARTS:
      return {
        ...state,
        results: action.payload.carts,
        totalPrice: getTotalCartPrice(action.payload.carts),
        totalCart: action.payload.carts.length,
        totalCartItems: getTotalCartItems(action.payload.carts),
      };

    case Actions.ADD_CART:
      const newAddedCarts = [...state.results, action.payload.cart];
      return {
        ...state,
        results: newAddedCarts,
        totalPrice: getTotalCartPrice(newAddedCarts),
        totalCart: newAddedCarts.length,
        totalCartItems: getTotalCartItems(newAddedCarts),
      };

    case Actions.UPDATE_CART:
      const newUpdatedCarts = state.results.map((cart) => {
        if (cart.id === action.payload.cart.id) {
          cart.quantity = action.payload.cart.quantity;
          cart.total_price = cart.quantity * cart.product.price;
        }
        return cart;
      });
      return {
        ...state,
        results: newUpdatedCarts,
        totalPrice: getTotalCartPrice(newUpdatedCarts),
        totalCart: newUpdatedCarts.length,
        totalCartItems: getTotalCartItems(newUpdatedCarts),
      };

    case Actions.REMOVE_CART:
      const newRemovedCarts = state.results.filter(
        (cart) => cart.id !== action.payload.cartId
      );
      return {
        ...state,
        results: newRemovedCarts,
        totalPrice: getTotalCartPrice(newRemovedCarts),
        totalCart: newRemovedCarts.length,
        totalCartItems: getTotalCartItems(newRemovedCarts),
      };

    case Actions.CLEAR_CARTS:
      return {
        ...state,
        results: [],
        totalPrice: 0,
        totalCart: 0,
        totalCartItems: 0,
      };

    default:
      return state;
  }
};

const getTotalCartPrice = (carts) => {
  if (carts.length > 0) {
    return +carts.reduce((sum, cart) => sum + cart.total_price, 0).toFixed(2);
  }
  return 0;
};

const getTotalCartItems = (carts) => {
  if (carts.length > 0) {
    return carts.reduce((sum, cart) => sum + cart.quantity, 0);
  }
  return 0;
};
