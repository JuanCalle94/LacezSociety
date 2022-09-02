import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import FilterProducts from "../components/FilterProducts";
import { useState, useEffect } from "react";
/* import UseGetProducts from "../hooks/UseGetProducts"; */

function DashBoard() {
  /*   const products = UseGetProducts("http://localhost:3030/api/products"); */

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <div>
        <div className="container dashboard__container">
          <section className="dashboard__user">
            <div className="user__info-container">
              <img className="user__image" src="" alt="user-img" />
              <div>
                <h4 className="user__tittle">
                  Hola<span className="user__tittle-point">.</span>
                </h4>
                <div className="yellow__line"></div>
                <p className="user__name">Leo Messi</p>
                <p className="user__email">messi87@gmail.com</p>
              </div>
            </div>
          </section>
          <section className="dashboard__products">
            <FilterProducts products={products} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <div className="products__info">
              {filtered.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>
          <section className="dashboard__users">
            <div className="users__nav">
              <nav>
                <ul>
                  <li>
                    <a href="#">Admins</a>
                  </li>
                  <li>
                    <a href="#">Clientes</a>
                  </li>
                </ul>
              </nav>
              <a className="users__nav-all" href="">
                Ver todos
              </a>
            </div>
            <div className="users__info">
              <div className="user__info">Hola soy un usuario</div>
              <div className="user__info">Hola soy un usuario</div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </React.StrictMode>
  );
}

export default DashBoard;
