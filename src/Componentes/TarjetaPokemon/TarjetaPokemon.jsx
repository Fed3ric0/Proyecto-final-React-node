import React from "react";
import "./TarjetaPokemon.css";
import Foto from "../../imagenes/bulbasaur.png";

const TarjetaPokemon = () => {
  return (
    <div className="contenedor">
      <p className="tarjetaId">id</p>

      <center>
        <img className="tarjetaImg" src={Foto} alt="foto" />
      </center>

      <h3 className="tarjetaNombre">nombre</h3>
    </div>
  );
};

export default TarjetaPokemon;
