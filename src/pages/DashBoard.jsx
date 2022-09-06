import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import FilterProducts from "../components/FilterProducts";
import UserCard from "../components/UserCard";
import FilterUser from "../components/FilterUser";
import GeneralCard from "../components/GeneralCard";
import Cards from "../containers/Cards";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DashBoard() {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setDataInfo(data.meta);
      });
  }, []);

  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((data) => {
        setDataUsers(data.meta);
      });
  }, []);

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

  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [activeRole, setActiveRole] = useState(2);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUser(data.users);
      });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <div>
        <div className="container dashboard__container">
          <section className="dashboard__user">
            <div className="user__info-container">
              <img
                className="user__image"
                src="https://i.im.ge/2022/09/06/ORcugc.Frame-2.png"
                alt="user-img"
              />
              <div>
                <h4 className="user__tittle">
                  Hola<span className="user__tittle-point">.</span>
                </h4>
                <div className="yellow__line"></div>
                <p className="user__name">Mr.Lacez</p>
                <p className="user__email">admin_lacez@gmail.com</p>
              </div>
            </div>
            <div className="database__info-container">
              <div className="database__card">
                <h4 className="database__card-tittle">Productos registrados</h4>
                <p className="database__card-total">{dataInfo.total}</p>
              </div>
              <div className="database__card">
                <h4 className="database__card-tittle">Usuarios registrados</h4>
                <p className="database__card-total">{dataUsers.total}</p>
              </div>
            </div>
          </section>
          <section className="dashboard__products">
            <h4 className="section__tittle">
              Productos<span className="section__tittle-point">.</span>
            </h4>
            <FilterProducts
              products={products}
              setFiltered={setFiltered}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <motion.div className="products__info">
              {filtered.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </motion.div>
          </section>
          <section className="dashboard__users">
            <h4 className="section__tittle">
              Usuarios<span className="section__tittle-point">.</span>
            </h4>
            <FilterUser
              users={users}
              setFilteredUser={setFilteredUser}
              activeRole={activeRole}
              setActiveRole={setActiveRole}
            />
            <div className="users__info">
              {filteredUser.map((result, i) => (
                <UserCard {...result} key={i} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </React.StrictMode>
  );
}

export default DashBoard;
