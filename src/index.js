import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import CryptoDetail from "./CryptoDetail";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path="/CryptoDetail" element={<CryptoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
