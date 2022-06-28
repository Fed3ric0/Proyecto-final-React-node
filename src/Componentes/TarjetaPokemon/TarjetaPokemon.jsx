import React from "react";
import "./TarjetaPokemon.css";

const TarjetaPokemon = ({ pokemon }) => {
  let foto = require(`../../imagenes/${pokemon.name.toLowerCase()}.png`);
  return (
    <li>
      <div className="contenedorPokemones">
        <p className="tarjetaId">{pokemon.id}</p>

        <center>
          <img className="tarjetaImg" src={foto} alt="foto" />
        </center>

        <h6 className="tarjetaNombre">{pokemon.name}</h6>
      </div>
    </li>
  );
};

export default TarjetaPokemon;
