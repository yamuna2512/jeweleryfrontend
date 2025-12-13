// src/API.js
import axios from "axios";
require("dotenv").config();

export const LOGIN_USER_KEY = "JEWEL_STORE_USER";

// Your backend base URL
let baseURL = "http://127.0.0.1:8000/api"; // <-- update if deployed later

// AXIOS INSTANCE
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR → inject token automatically
api.interceptors.request.use(
  (config) => {
    if (config.requireToken) {
      const user = localStorage.getItem(LOGIN_USER_KEY)
        ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY))
        : null;

      if (user && user.token) {
        // Your backend uses Token Auth => "Authorization: Token <token>"
        config.headers.common["Authorization"] = `Token ${user.token}`;
      }
    }
    return config;
  },
  (err) => console.error(err)
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log("API Error:", error);

    if (error?.response?.status === 401) {
      localStorage.removeItem(LOGIN_USER_KEY);
    }

    return Promise.reject(error);
  }
);

export default class API {

  /* -----------------------------
   *      USER AUTH
   * ----------------------------*/

  signUp = async (signUpBody) => {
    const formData = new FormData();
    for (const key in signUpBody) {
      formData.append(key, signUpBody[key]);
    }
    return api.post("/users/signup/", formData);
  };

  signIn = async (signInBody) => {
    const formData = new FormData();
    for (const key in signInBody) {
      formData.append(key, signInBody[key]);
    }
    return api.post("/users/signin/", formData);
  };

  getUserProfile = () => {
    return api.get("/users/profile/", { requireToken: true });
  };


  /* -----------------------------
   *      CATEGORY / SUBCATEGORY
   * ----------------------------*/

  getCategories = () => {
    return api.get("/products/categories/");
  };

  getSubCategories = () => {
    return api.get("/products/subcategories/");
  };


  /* -----------------------------
   *      PRODUCTS
   * ----------------------------*/

  getProducts = (query = {}) => {
    return api.get("/products/products/", {
      params: query,
    });
  };

  getProductDetail = (productId) => {
    return api.get(`/products/products/${productId}/`);
  };


  /* -----------------------------
   *      CART
   * ----------------------------*/

  getCartItems = () => {
    return api.get("/products/cart/", {
      requireToken: true,
    });
  };

  addToCart = (body) => {
    const formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    return api.post("/products/cart/add/", formData, {
      requireToken: true,
    });
  };

  removeCartItem = (cartItemId) => {
    return api.delete(`/products/cart/remove/${cartItemId}/`, {
      requireToken: true,
    });
  };


  /* -----------------------------
   *      WISHLIST
   * ----------------------------*/

  getWishlist = () => {
    return api.get("/products/wishlist/", {
      requireToken: true,
    });
  };

  addToWishlist = (body) => {
    const formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    return api.post("/products/wishlist/add/", formData, {
      requireToken: true,
    });
  };
}
