// src/reducks/users/operations.js

import API, { LOGIN_USER_KEY } from "../../api";
import {
  signInAction,
  signOutAction,
  signUserStoreAction,
  signInError,
} from "./actions";

const api = new API();

/* =====================================
   LOAD USER FROM LOCAL STORAGE
===================================== */
export const fetchUserFromLocalStorage = () => {
  return (dispatch) => {
    const userJSON = localStorage.getItem(LOGIN_USER_KEY);
    if (!userJSON) return;

    const user = JSON.parse(userJSON);
    if (user?.token) {
      dispatch(signUserStoreAction(user));
    }
  };
};

/* =====================================
   SIGN UP
===================================== */
export const signUp = (userData, callback) => {
  return async (dispatch) => {
    try {
      const res = await api.signUp(userData);

      // The backend returns: {id, first_name, last_name, email, token, token_expires}
      const user = {
        id: res.id,
        email: res.email,
        first_name: res.first_name,
        token: res.token,
      };

      // Save in localStorage
      localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));

      // Update Redux store
      dispatch(signInAction(user));

      if (callback) callback();
    } catch (error) {
      console.error("SIGNUP ERROR:", error.response?.data || error);

      dispatch(
        signInError({
          email: "Signup failed",
          password: "Signup failed",
        })
      );
    }
  };
};

/* =====================================
   SIGN IN
===================================== */
export const signIn = (email, password, callback) => {
  return async (dispatch) => {
    try {
      console.log("SENDING LOGIN DATA:", { email, password });

      const res = await api.signIn({ email, password });

      // backend response:
      // { id, first_name, last_name, email, token, token_expires }

      const user = {
        id: res.id,
        first_name: res.first_name,
        email: res.email,
        token: res.token,
      };

      localStorage.setItem(
        LOGIN_USER_KEY,
        JSON.stringify(user)
      );

      dispatch(signInAction(user));

      if (callback) callback();
    } catch (error) {
      console.error("LOGIN ERROR:", error.response?.data || error);

      dispatch(
        signInError({
          email: "Invalid email or password",
          password: "Invalid email or password",
        })
      );
    }
  };
};

/* =====================================
   SIGN OUT
===================================== */
export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem(LOGIN_USER_KEY);
    dispatch(signOutAction());
  };
};
