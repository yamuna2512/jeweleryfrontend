import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProductsAction = (products) => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/api/products/");
      dispatch(fetchProductsAction(response.data));
    } catch (error) {
      console.error("Fetch products failed", error);
    }
  };
};
