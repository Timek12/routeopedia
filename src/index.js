import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import NotFound from "./NotFound";
import CryptoDetail from "./CryptoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path="/CryptoDetail" element={<CryptoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
