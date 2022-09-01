import React from "react";

function Header() {
  return (
    <React.StrictMode>
      <header className="container header__container">
        <img
          className="header__nav-logo"
          src="https://i.ibb.co/hLHD6vZ/logo.png"
          alt="logo"
        />
        <div className="header__nav-icons">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </header>
    </React.StrictMode>
  );
}

export default Header;
