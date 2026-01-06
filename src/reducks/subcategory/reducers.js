import { FETCH_SUBCATEGORIES } from "./operations";

const initialState = {
  list: []
};

export const SubCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBCATEGORIES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
export default SubCategoryReducer;