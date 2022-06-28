import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";

const Detalles = ({ pokemones }) => {
  return (
    <div>
      <nav>
        <img src={Flecha} alt="flecha" />
        <h1>pokemones.name</h1>
      </nav>
    </div>
  );
};

export default Detalles;
