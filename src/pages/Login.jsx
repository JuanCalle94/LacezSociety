import React from "react";
import { useState, useEffect } from "react";

function Login() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.text())
      .then((data) => {
        console.log(data)
        setProducts(data);
      });
  }, []);

  return (
    <React.StrictMode>
      <main className="container login__container">
        <div className="login__div">
          <img
            className="login__logo"
            src="https://i.ibb.co/hLHD6vZ/logo.png"
            alt="logo"
            border="0"
          />
          <h3 className="login__tittle">
            Bienvenido<span className="login__tittle-point">.</span>
          </h3>
          <div className="login__options">
          <span>//</span>
            <a href="#" className="inicio-sesion">
              Administrador
            </a>
          </div>
          <form id="formLogin" action="#" method="POST" className="login__form">
            <div id="divEmail" className="login__form-div">
              <input
                className="login__form-inputs"
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <div id="errorEmail" className="error-text"></div>
            </div>
            <div id="divPassword" className="login__form-div">
              <input
                className="login__form-inputs"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
              />
              <div id="errorPassword" className="error-text"></div>
            </div>
            <div className="login__form-remember--div">
              <label
                className="login__form-remember--text"
                htmlFor="rememberUser"
              >
                Recordar mi usuario
              </label>
              <input type="checkbox" name="remember_user" id="rememberUser" />
            </div>
            <div className="login__buttons">
              <div>
                <button
                  className="form__button--default button-login"
                  type="submit"
                  id="confirmar"
                >
                  Iniciar Sesion
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </React.StrictMode>
  );
}

export default Login;
