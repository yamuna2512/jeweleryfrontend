import API, { LOGIN_USER_KEY } from "../../api";

/* ---------- SIGN UP ---------- */
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export const signUpAction = (user) => {
  return {
    type: SIGN_UP,
    payload: { user },
  };
};

export const signUpError = (errors) => {
  return {
    type: SIGN_UP_ERROR,
    payload: { errors },
  };
};

/* async signup */
export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      const api = new API();
      const response = await api.signUp(userData);

      dispatch(signUpAction(response));
    } catch (error) {
      dispatch(signUpError(error));
    }
  };
};

/* ---------- SIGN IN ---------- */
export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const signInAction = (user) => {
  return {
    type: SIGN_IN,
    payload: { user },
  };
};

export const signInError = (errors) => {
  return {
    type: SIGN_IN_ERROR,
    payload: { errors },
  };
};

/* async signin */
export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const api = new API();
      const response = await api.signIn({ email, password });

      localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));

      dispatch(signInAction(response));
    } catch (error) {
      dispatch(signInError(error));
    }
  };
};

/* ---------- STORE USER ---------- */
export const SIGN_USER_STORE = "SIGN_USER_STORE";

export const signUserStoreAction = (user) => {
  return {
    type: SIGN_USER_STORE,
    payload: { user },
  };
};

/* ---------- SIGN OUT ---------- */
export const SIGN_OUT = "SIGN_OUT";

export const signOutAction = () => {
  localStorage.removeItem(LOGIN_USER_KEY);
  return {
    type: SIGN_OUT,
  };
};

/* ---------- CLEAR ERRORS ---------- */
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const clearErrorsAction = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
