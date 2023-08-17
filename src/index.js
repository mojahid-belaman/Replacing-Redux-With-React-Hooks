import React from "react";
import ReactDOM from "react-dom/client";
import ProductProvider from "./context/product-provider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
