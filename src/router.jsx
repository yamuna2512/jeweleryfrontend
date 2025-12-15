// src/router.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./containers/homepage";
import SignIn from "./containers/signin";
import SignUp from "./containers/signup";
import ProductDetails from "./containers/productdetails";
import Cart from "./containers/cart";
import Wishlist from "./containers/wishlist";

const RouterConfig = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/product/:id" component={ProductDetails} />
    <Route path="/cart" component={Cart} />
    <Route path="/wishlist" component={Wishlist} />
  </Switch>
);

export default RouterConfig;
