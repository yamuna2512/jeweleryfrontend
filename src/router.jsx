// src/router.js
import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./containers/homepage";
import SignIn from "./containers/signin";
import SignUp from "./containers/signup";
import ProductDetails from "./containers/productdetails";
import Cart from "./containers/cart";
import Wishlist from "./containers/wishlist";

export default function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/wishlist" component={Wishlist} />
    </Switch>
  );
}
