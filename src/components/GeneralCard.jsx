import React from 'react';
import { motion } from "framer-motion";

function GeneralCard(props) {
  return (
    <>
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="user__info"
    >
      <img
        className="user__info-image"
        src=""
        alt="img"
      />
      <div className="user__info-data">
        <i className="fa-solid fa-pen-to-square icon edit__icon"></i>
        <i className="fa-solid fa-trash-can icon trash__icon"></i>
        <h3 className="user__info-name">{props.name}</h3>
        <p className="user__info-email">{props.email || props.precio }</p>
      </div>
    </motion.div>
  </>
  )
}

export default GeneralCard