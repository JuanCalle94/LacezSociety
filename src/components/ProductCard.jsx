import React from "react";
import { motion } from "framer-motion";

const image = require.context('../../../ProyectoIntegradorG9/public/img/products', true);

function ProductCard({ product }) {

  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="card__info"
      >
          <img
          className="card__info-image"
          src={image(`./${product.image}`)}
          alt="img"
        />
        <div className="card__info-data">
          <i className="fa-solid fa-pen-to-square icon edit__icon"></i>
          <i className="fa-solid fa-trash-can icon trash__icon"></i>
          <h3 className="card__info-name">{product.name}</h3>
          <p className="card__info-price"><span className="price__currency">$</span>{product.precio}</p>
        </div>
      </motion.div>
    </>
  );
}

export default ProductCard;
