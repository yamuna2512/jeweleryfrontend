import axios from "axios";

export const FETCH_SUBCATEGORIES = "FETCH_SUBCATEGORIES";

export const fetchSubCategoriesAction = (data) => ({
  type: FETCH_SUBCATEGORIES,
  payload: data,
});

export const fetchSubCategories = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/products/subcategories/"
      );
      dispatch(fetchSubCategoriesAction(res.data));
    } catch (error) {
      console.error("Subcategory fetch failed", error);
    }
  };
};