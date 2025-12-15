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

    case Actions.ADD_CART: {
      const newAddedCarts = [...state.results, action.payload.cart];
      return {
        ...state,
        results: newAddedCarts,
        totalPrice: getTotalCartPrice(newAddedCarts),
        totalCart: newAddedCarts.length,
        totalCartItems: getTotalCartItems(newAddedCarts),
      };
    }

    case Actions.UPDATE_CART: {
      const newUpdatedCarts = state.results.map((cart) =>
        cart.id === action.payload.cart.id
          ? {
              ...cart,
              quantity: action.payload.cart.quantity,
              total_price:
                action.payload.cart.quantity * cart.product.price,
            }
          : cart
      );

      return {
        ...state,
        results: newUpdatedCarts,
        totalPrice: getTotalCartPrice(newUpdatedCarts),
        totalCart: newUpdatedCarts.length,
        totalCartItems: getTotalCartItems(newUpdatedCarts),
      };
    }

    case Actions.REMOVE_CART: {
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
    }

    case Actions.CLEAR_CARTS:
      return {
        ...initialState.cart,
      };

    default:
      return state;
  }
};

// ================= HELPERS =================

const getTotalCartPrice = (carts) => {
  if (carts.length > 0) {
    const totalPrice = carts.reduce(
      (prev, cur) => prev + cur.total_price,
      0
    );
    return +totalPrice.toFixed(2);
  }
  return 0;
};

const getTotalCartItems = (carts) => {
  if (carts.length > 0) {
    return carts.reduce((prev, cur) => prev + cur.quantity, 0);
  }
  return 0;
};
