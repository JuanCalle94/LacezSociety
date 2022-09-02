import React from "react";
import ProductCard from "../components/ProductCard";
import UseGetProducts from "../hooks/UseGetProducts";

function ProductsInfo() {
  const products = UseGetProducts("http://localhost:3030/api/products");
  let newProducts = products.filter((product) => product.category === 1);
  let retroProducts = products.filter((product) => product.category === 2);

  return (
    <div className="products__info">
      {newProducts.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsInfo;
