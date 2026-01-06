import { createSelector } from "reselect";

// const userSelector = (state) => state.user;
export const getAuthError = (state) => state.users.error;
// export const getUser = createSelector(
//     [userSelector],
//     state => state
// );
export const getUser = state => state.users; 
export const getSignUpError = (state) => state.users.errors;
export const geSignInError = (state) => state.users.errors;



export const isUserSignedIn = (state) =>
  Boolean(state.users.token);

export const getUserFirstName = (state) =>
  state.users.first_name || "";