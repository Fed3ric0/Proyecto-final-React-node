import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";

const Detalles = ({ pokemones }) => {
  return (
    <div>
      <nav>
        <img src={Flecha} alt="flecha" />
      </nav>
    </div>
  );
};

export default Detalles;
