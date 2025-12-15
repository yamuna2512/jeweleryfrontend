import { FETCH_CATEGORIES } from "./operations";

const initialState = {
  list: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
