import React, { useRef } from "react";

function Login() {

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password : formData.get('password')
    }
    console.log(data)
  }

  return (
    <>
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
          <form ref={form} id="formLogin" action="" /* method="POST" */ className="login__form">
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
                  onClick={handleSubmit}
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
    </>
  );
}

export default Login;
