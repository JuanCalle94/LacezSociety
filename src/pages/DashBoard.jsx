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
import { motion } from "framer-motion";
import { getData } from "../services/getData";

function DashBoard() {

  const [dataInfo, setDataInfo] = useState([]); // Datos meta de los productos

  useEffect(() => {
    let interval = setInterval(() => { // Intervalos para refrescar datos de la API actualizada cada 1 seg
      getData({path:"products"}).then((result) => { 
        setDataInfo(result.meta)
      }).catch((err) => {
        console.log(err);
      });
    }, 1000);

    return ()=>{
      clearInterval(interval); // Clean up: Elimina de la memoria el intervalo anteriormente creado y crea uno nuevo
    }
  }, []);

  const [dataUsers, setDataUsers] = useState([]); // Datos meta de los usuarios

  useEffect(() => {
    let interval = setInterval(() => { // Intervalos para refrescar datos de la API actualizada cada 1 seg
      getData({path:"users"}).then((result) => {
        setDataUsers(result.meta)
      }).catch((err) => {
        console.log(err);
      });
    }, 1000);
    return ()=>{
      clearInterval(interval); // Clean up: Elimina de la memoria el intervalo anteriormente creado y crea uno nuevo
    }
  }, []);

  const [products, setProducts] = useState([]); // Datos de los productos
  const [filtered, setFiltered] = useState([]); // Filtro de los productos por categoria
  const [activeCategory, setActiveCategory] = useState(0); // Activamos categorias para hacer un target (Todos sera la activa por defecto)

  useEffect(() => { // Filtro de los productos por categoria
    getData({path:"products"}).then((result) => {
      setFiltered(result.products)
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  useEffect(() => { // Datos de los productos
    let interval = setInterval(() => { // Intervalos para refrescar datos de la API actualizada cada 1 seg
      getData({path:"products"}).then((result) => {
        setProducts(result.products);
      }).catch((err) => {
        console.log(err);
      });
    }, 1000);

    return ()=>{
      clearInterval(interval); // clean up: Elimina de la memoria el intervalo anteriormente creado y crea uno nuevo
    }
  }, []);

  const [users, setUsers] = useState([]); // Datos de los usuarios
  const [filteredUser, setFilteredUser] = useState([]); // Filtro de los usuarios por rol
  const [activeRole, setActiveRole] = useState(0); // Activamos roles para hacer un target (Todos sera la activa por defecto)

  useEffect(() => { // Filtro de los productos por categoria

    getData({path:"users"}).then((result) => {
      setFilteredUser(result.users)
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  useEffect(() => { // Datos de los productos

    let interval = setInterval(() => { // Intervalos para refrescar datos de la API actualizada cada 1 seg
      getData({path:"users"}).then((result) => {
        setUsers(result.users);
      }).catch((err) => {
        console.log(err);
      });
    }, 1000);

    return ()=>{
      clearInterval(interval); // clean up: Elimina de la memoria el intervalo anteriormente creado y crea uno nuevo
    }

  }, []);


  return (
    <>
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
    </>
  );
}

export default DashBoard;
