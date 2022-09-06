import React from "react";
import { motion } from "framer-motion";

const image = require.context('../../../ProyectoIntegradorG9/public/img/users', true);

function UserCard(props) {
  return (
    <React.StrictMode>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="user__info"
      >
        <img
          className="user__info-image"
          src={image(`./${props.avatar}`)}
          alt="img"
        />
        <div className="user__info-data">
          <i className="fa-solid fa-pen-to-square icon edit__icon"></i>
          <i className="fa-solid fa-trash-can icon trash__icon"></i>
          <h3 className="user__info-name">{props.name}</h3>
          <p className="user__info-email">{props.email}</p>
        </div>
      </motion.div>
    </React.StrictMode>
  );
}

export default UserCard;
