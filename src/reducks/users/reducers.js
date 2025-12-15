import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case Actions.SIGN_UP:
    case Actions.SIGN_IN:
    case Actions.SIGN_USER_STORE:
      return {
        ...state,
        ...action.payload.user,
        errors: {
          email: null,
          password: null,
        },
      };

    case Actions.SIGN_UP_ERROR:
    case Actions.SIGN_IN_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };

    case Actions.SIGN_OUT:
      return initialState.user;

    case Actions.CLEAR_ERRORS:
      return {
        ...state,
        errors: {
          email: null,
          password: null,
        },
      };

    default:
      return state;
  }
};
