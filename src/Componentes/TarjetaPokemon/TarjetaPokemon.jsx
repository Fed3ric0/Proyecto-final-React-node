import React from "react";
import "./TarjetaPokemon.css";

const TarjetaPokemon = ({ pokemon }) => {
  let foto = require(`../../imagenes/${pokemon.name.toLowerCase()}.png`);
  return (
    <li className="tarjetaPk" style={{ borderColor: pokemon.color }}>
      <div className="contenedorPokemones">
        <p style={{ color: pokemon.color }} className="tarjetaId">
          #{pokemon.id}
        </p>

        <center>
          <img className="tarjetaImg" src={foto} alt="foto" />
        </center>

        <h6
          style={{ backgroundColor: pokemon.color }}
          className="tarjetaNombre"
        >
          {pokemon.name}
        </h6>
      </div>
    </li>
  );
};

export default TarjetaPokemon;
