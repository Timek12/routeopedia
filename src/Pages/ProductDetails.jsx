import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  return (
    <div>
      <h4>ProductDetail</h4>
      <p>Product Id: {productId}</p>
    </div>
  );
}

export default ProductDetails;
