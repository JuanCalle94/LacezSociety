import React from "react";

function ProductCard({product}) {
  return (
    <React.StrictMode>
      <div className="product-container">
        <h3>{product.name}</h3>
        <p>${product.precio}</p>
      </div>
    </React.StrictMode>
  );
}

export default ProductCard;
