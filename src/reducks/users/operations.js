// src/reducks/users/operations.js
import API, { LOGIN_USER_KEY } from "../../api";
import { signUpAction, signUpError, signUserStoreAction,  signInAction, signInError  } from "./actions";

const api = new API();

export const fetchUserFromLocalStorage = () => {
  return (dispatch) => {
    try {
      const userJSON = localStorage.getItem(LOGIN_USER_KEY);
      if (!userJSON) return;
      const user = JSON.parse(userJSON);
      if (user && user.token) {
        dispatch(signUserStoreAction(user));
      }
    } catch (error) {
      console.error("fetchUserFromLocalStorage error:", error);
    }
  };
};

export const signUp = (data, onSuccess) => {
  return async (dispatch) => {
    try {
      const payload = {
        first_name: data.firstname,
        last_name: data.lastname,
        email: data.email,
        password: data.password,
        phone: data.phone || "",
      };

      const response = await api.signUp(payload);

      localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));

      dispatch(signUpAction(response));

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Signup failed:", error);
      dispatch(signUpError(error.response?.data || { message: "Signup failed" }));
    }
  };
};


export const signIn = (data, onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await api.signIn({
        email: data.email,
        password: data.password,
      });

      localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));
      dispatch(signInAction(response));

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Sign in failed:", error);
      dispatch(
        signInError(
          error.response?.data || { message: "Sign in failed" }
        )
      );
    }
  };
};
