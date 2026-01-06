

// src/reducks/wishlist/operations.js

import API from "../../api";
import { setWishlist } from "./actions";

const api = new API();

/* ==============================
   FETCH WISHLIST
============================== */
export const fetchWishlist = () => {
  return async (dispatch) => {
    try {
      const res = await api.getWishlist();
      dispatch(setWishlist(res));
    } catch (error) {
      console.error("FETCH WISHLIST ERROR:", error);
    }
  };
};

/* ==============================
   TOGGLE WISHLIST
============================== */
export const toggleWishlist = (productId) => {
  return async (dispatch, getState) => {
    try {
      const wishlist = getState().wishlist.list;

      const existing = wishlist.find(
        (item) => item.product.id === productId
      );

      if (existing) {
        //  REMOVE
        await api.removeWishlist(existing.id);
      } else {
        //  ADD
        await api.addToWishlist({ productId });
      }

      //  Refresh wishlist after change
      dispatch(fetchWishlist());
    } catch (error) {
      console.error("TOGGLE WISHLIST ERROR:", error);
    }
  };
};
