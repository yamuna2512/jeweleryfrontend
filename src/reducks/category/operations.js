// src/reducks/category/operations.js
import axios from "axios";

// action type
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

// action creator
export const fetchCategoriesAction = (categories) => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});

// thunk operation (THIS WAS MISSING)
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      //  change URL to match your backend
      const response = await axios.get("http://localhost:8000/api/products/categories/");
      dispatch(fetchCategoriesAction(response.data));
    } catch (error) {
      console.error("Fetch categories failed", error);
    }
  };
};
