// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/default/header";
import Footer from "./components/default/footer";
import RouterConfig from "./router";

function App() {
  return (
    <Router>
      <Header />
      <RouterConfig />
      <Footer />
    </Router>
  );
}

export default App;
