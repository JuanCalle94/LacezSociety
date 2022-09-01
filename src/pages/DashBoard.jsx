import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DashBoard() {

  return (
    <React.StrictMode>
      <Header />
      <div>
        <div className='container dashboard__container'>
          <section className='dashboard__user'>
            <div className='user__info-container'>
              <img className='user__image' src="" alt="user-img" />
              <div>
                <h4 className='user__tittle'>Hola<span className="user__tittle-point">.</span></h4>
                <div className='yellow__line'></div>
                <p className='user__name'>Leo Messi</p>
                <p className='user__email'>messi87@gmail.com</p>
              </div>
            </div>
          </section>
          <section className='dashboard__products'>
            <div className='products__nav'>
                <nav>
                  <ul>
                    <li><a href="#">Nuevos</a></li>
                    <li><a href="#">Retro</a></li>
                  </ul>
                </nav>
                <a className='products__nav-all' href="">Ver todos</a>
            </div>
            <div className="products__info">
              <div className='product__info'>Hola soylos tenis</div>
              <div className='product__info'>Hola soylos tenis</div>
              <div className='product__info'>Hola soylos tenis</div>
              <div className='product__info'>Hola soylos tenis</div>
            </div>
          </section>
          <section className='dashboard__users'>
          <div className='users__nav'>
                <nav>
                  <ul>
                    <li><a href="#">Admins</a></li>
                    <li><a href="#">Clientes</a></li>
                  </ul>
                </nav>
                <a className='users__nav-all' href="">Ver todos</a>
            </div>
            <div className="users__info">
              <div className='user__info'>Hola soy un usuario</div>
              <div className='user__info'>Hola soy un usuario</div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </React.StrictMode>
  )
}

export default DashBoard;