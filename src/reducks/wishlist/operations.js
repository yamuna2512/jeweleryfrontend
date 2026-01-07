

import API from "../../api";

const api = new API();

export const fetchWishlist = () => {
  return async (dispatch) => {
    try {
      const wishlist = await api.getWishlist();
      dispatch({ type: "FETCH_WISHLIST_SUCCESS", payload: wishlist });
    } catch (error) {
      console.error("FETCH WISHLIST ERROR:", error);
    }
  };
};

export const toggleWishlist = (productId) => {
  return async (dispatch, getState) => {
    try {
      const wishlist = getState().wishlist.list;
      const existing = wishlist.find((item) => item.product.id === productId);

      if (existing) {
        await api.removeWishlist(existing.id);
      } else {
        await api.addToWishlist(productId);
      }

      dispatch(fetchWishlist());
    } catch (error) {
      console.error("TOGGLE WISHLIST ERROR:", error);
    }
  };
};
