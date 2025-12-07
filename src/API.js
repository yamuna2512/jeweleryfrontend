import axios from "axios";
require("dotenv").config();

export const LOGIN_USER_KEY = "JEWELLERY_LOGIN_USER";

// ===== BASE URL =====
let baseURL;
baseURL = "http://127.0.0.1:8000"; // your Django backend

// ===== AXIOS INSTANCE =====
const api = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

// ===== REQUEST INTERCEPTOR =====
api.interceptors.request.use(
  (config) => {
    if (config.requireToken) {
      const userData = localStorage.getItem(LOGIN_USER_KEY)
        ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY))
        : null;

      if (userData && userData.token) {
        config.headers.common["Authorization"] = `Token ${userData.token}`;
      }
    }
    return config;
  },
  (err) => console.error(err)
);

// ===== RESPONSE INTERCEPTOR =====
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);

    if (error.response && error.response.status === 401) {
      localStorage.removeItem(LOGIN_USER_KEY);
    }

    return Promise.reject(error);
  }
);

// ========== EXPORT API CLASS ==========
export default class API {
  // =================== AUTH ===================

  signUp = async (body) => {
    const formData = new FormData();
    for (const key in body) formData.append(key, body[key]);
    return api.post("/Users/signup/", formData);
  };

  signIn = async (body) => {
    const formData = new FormData();
    for (const key in body) formData.append(key, body[key]);
    return api.post("/Users/signin/", formData);
  };

  getProfile = () => {
    return api.get("/Users/profile/", { requireToken: true });
  };

  // =================== CATEGORIES ===================

  getCategories = () => {
    return api.get("/products/categories/");
  };

  getSubCategories = (categoryId) => {
    return api.get("/products/subcategories/", {
      params: { category_id: categoryId },
    });
  };

  // =================== PRODUCTS ===================

  getProducts = (query = {}) => {
    return api.get("/products/products/", { params: query });
  };

  getProductDetail = (id) => {
    return api.get(`/products/products/${id}/`);
  };

  // =================== CART ===================

  getCart = () => {
    return api.get("/products/cart/", { requireToken: true });
  };

  addToCart = (body) => {
    const formData = new FormData();
    for (const key in body) formData.append(key, body[key]);
    return api.post("/products/cart/add/", formData, { requireToken: true });
  };

  removeCartItem = (id) => {
    return api.delete(`/products/cart/remove/${id}/`, {
      requireToken: true,
    });
  };

  // =================== WISHLIST ===================

  getWishlist = () => {
    return api.get("/products/wishlist/", { requireToken: true });
  };

  addWishlist = (body) => {
    const formData = new FormData();
    for (const key in body) formData.append(key, body[key]);
    return api.post("/products/wishlist/add/", formData, { requireToken: true });
  };

  
}
