// src/reducks/users/operations.js

import axios from "axios";
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

// export const signUp = (data, onSuccess) => {
//   return async (dispatch) => {
//     try {
//       const payload = {
//         first_name: data.firstname,
//         last_name: data.lastname,
//         email: data.email,
//         password: data.password,
//         phone: data.phone || "",
//       };

//       const response = await api.signUp(payload);

//       localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));

//       dispatch(signUpAction(response));

//       if (onSuccess) onSuccess();
//     } catch (error) {
//       console.error("Signup failed:", error);
//       dispatch(signUpError(error.response?.data || { message: "Signup failed" }));
//     }
//   };
// };



export const signUp = (userData, callback) => {
  return async (dispatch) => {
    try {
      console.log("SENDING DATA TO BACKEND:", userData);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/signup/",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("SIGNUP RESPONSE:", response.data);

      if (callback) callback();

    } catch (error) {
      console.error(
        "SIGNUP ERROR:",
        error.response ? error.response.data : error
      );
      alert("Signup failed. Check console.");
    }
  };
};


export const signIn = (loginData, callback) => {
  return async (dispatch) => {
    try {
      console.log("SENDING LOGIN DATA:", loginData);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/signin/",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("LOGIN SUCCESS:", response.data);

      // Save user info
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      if (callback) callback();

    } catch (error) {
      console.error(
        "LOGIN ERROR:",
        error.response?.data || error
      );
      alert("Invalid email or password");
    }
  };
};
