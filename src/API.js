// src/api.js
import axios from "axios";

export const LOGIN_USER_KEY = "JEWEL_STORE_USER";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});



api.interceptors.request.use((config) => {
  const raw = localStorage.getItem(LOGIN_USER_KEY);

  if (raw) {
    const user = JSON.parse(raw);
    if (user?.token) {
      config.headers.Authorization = `Token ${user.token}`;
    }
  }

  return config;
});


/* ================= RESPONSE INTERCEPTOR ================= */
// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     if (error?.response?.status === 401) {
//       localStorage.removeItem(LOGIN_USER_KEY);
//       console.error("Unauthorized");
//     }
//     return Promise.reject(error);
//   }
// );

// export default class API {


api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response?.status === 401) {
      console.error("Unauthorized");
    }
    return Promise.reject(error);
  }
);

export default class API {
  /* ---------- SIGN IN ---------- */
  signIn = async ({ email, password }) => {
  const res = await api.post("/users/signin/", {
    email,
    password,
  });

  localStorage.setItem(
    LOGIN_USER_KEY,
    JSON.stringify({
      id: res.id,
      email: res.email,
      first_name: res.first_name,
      token: res.token,
    })
  );

  return res;
};

// signIn = async ({ email, password }) => {
//   const formData = new FormData();
//   formData.append("email", email);
//   formData.append("password", password);

//   const res = await api.post("/users/signin/", formData);

//   return res;
// };
  /* ---------- SIGN UP ---------- */
  signUp = async (data) => {
    return api.post("/users/signup/", data);
  };

/* ---------- PROFILE ---------- */
  getUserProfile = () =>
    api.get("/users/profile/", { requireToken: true });




  /* ---------- CATEGORY ---------- */
  getCategories = () => api.get("/products/categories/");
  getSubCategories = () => api.get("/products/subcategories/");

  /* ---------- PRODUCTS ---------- */
  getProducts = (params = {}) =>
    api.get("/products/products/", { params });

  getProductDetail = (id) =>
    api.get(`/products/products/${id}/`);

  /* ---------- CART ---------- */
  getCartItems = () =>
    api.get("/products/cart/", { requireToken: true });

  addToCart = (data) =>
    api.post("/products/cart/add/", data, { requireToken: true });

  removeCartItem = (id) =>
    api.delete(`/products/cart/remove/${id}/`, {
      requireToken: true,
    });
/* ---------- WISHLIST ---------- */

// GET wishlist
  getWishlist = async () => {
    return api.get("/products/wishlist/");
  };

  // ADD product to wishlist
  addToWishlist = async (productId) => {
    return api.post("/products/wishlist/add/", {
      product_id: productId, // backend expects product_id
    });
  };

  // REMOVE product from wishlist
  removeWishlist = async (wishlistId) => {
    return api.delete(`/products/wishlist/remove/${wishlistId}/`);
  };
}