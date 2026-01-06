import { configureStore } from "@reduxjs/toolkit";

import  CategoriesReducer  from "../category/reducers";
import  ProductsReducer  from "../product/reducers";
import  SubCategoryReducer  from "../subcategory/reducers";
import { UserReducer } from "../users/reducers";
import { CartsReducer } from "../cart/reducers";
import WishlistReducer from "../wishlist/reducers";

const store = configureStore({
  reducer: {
    category: CategoriesReducer,
    subcategory: SubCategoryReducer,
    product: ProductsReducer,
    users: UserReducer,
    cart: CartsReducer,
    wishlist: WishlistReducer,
  },
});

export default store;
