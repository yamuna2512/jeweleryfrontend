// src/reducks/store/store.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

// 👇 IMPORT NAMED REDUCERS (THIS IS THE FIX)
import { CategoriesReducer } from "../category/reducers";
import { ProductsReducer } from "../product/reducers";
import { UserReducer } from "../users/reducers";
import { CartsReducer } from "../cart/reducers";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProductsReducer,
  users: UserReducer,
  cart: CartsReducer,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
