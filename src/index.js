import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import CryptoDetail from "./CryptoDetail";
import Home from "./Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import CreateProduct from "./Pages/CreateProduct";
import ProductDetails from "./Pages/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/CryptoDetail/:cryptoSymbol" element={<CryptoDetail />}></Route>
        <Route path="/Product">
          <Route path="" element={<Product />}></Route>
          <Route path="Create" element={<CreateProduct />}></Route>
          <Route path="Details/:productId" element={<ProductDetails />}></Route>
          <Route path="List" element={<ProductList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
