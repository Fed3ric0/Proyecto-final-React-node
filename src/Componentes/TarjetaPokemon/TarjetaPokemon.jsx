import React from "react";
import "./TarjetaPokemon.css";
import { Link } from "react-router-dom";

const TarjetaPokemon = ({ pokemon }) => {
  let foto = require(`../../imagenes/${pokemon.name.toLowerCase()}.png`);
  return (
    <Link
      className="linkDetalles"
      to={`detalles/${pokemon.name.toLowerCase()}`}
    >
      <li className="tarjetaPk" style={{ borderColor: pokemon.color }}>
        <div className="contenedorPokemones">
          <p style={{ color: pokemon.color }} className="tarjetaId">
            #{pokemon.id}
          </p>

          <center>
            <img className="tarjetaImg" src={foto} alt="foto" />
          </center>

          <p
            style={{
              backgroundColor: pokemon.color,
              borderColor: pokemon.color,
            }}
            className="tarjetaNombre"
          >
            {pokemon.name}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default TarjetaPokemon;
