import { configureStore } from "@reduxjs/toolkit";

import  CategoriesReducer  from "../category/reducers";
import  ProductsReducer  from "../product/reducers";
import { UserReducer } from "../users/reducers";
import { CartsReducer } from "../cart/reducers";

const store = configureStore({
  reducer: {
    categories: CategoriesReducer,
    products: ProductsReducer,
    users: UserReducer,
    cart: CartsReducer,
  },
});

export default store;
