// src/App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/default/header";
import Footer from "./components/default/footer";
import RouterConfig from "./router";

import { fetchUserFromLocalStorage } from "./reducks/users/operations";

function App() {
  const dispatch = useDispatch();

  // Load user from localStorage on app start
  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Header />
      <RouterConfig />
      <Footer />
    </>
  );
}

export default App;
