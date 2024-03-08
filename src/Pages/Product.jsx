import React from "react";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();

  const [gotoProduct, setGoToProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product{" "}
      </button>
      <Link to={"/product/details/5"}>
        <button>Navigate to Product Detail - 5</button>
      </Link>
      {gotoProduct && <Navigate to="/product/details/3" />}
      <button
        onClick={() => {
          setGoToProduct({ gotoProduct: true });
        }}
      >
        Navigate to product - 3 {useState}
      </button>
    </div>
  );
}

export default Product;
