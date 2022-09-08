import React from "react";
import ProductCard from "../components/ProductCard";
import UseGetProducts from "../hooks/UseGetProducts";

function ProductsInfo() {
  const products = UseGetProducts("http://localhost:3030/api/products");

  return (
    <div className="products__info">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsInfo;
