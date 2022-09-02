import { useState, useEffect } from "react";

function UseGetProducts(API) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products)
        });
    }, []);

    return products;
}

export default UseGetProducts;