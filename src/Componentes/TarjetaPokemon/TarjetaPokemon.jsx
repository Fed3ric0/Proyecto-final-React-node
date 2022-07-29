import React from "react";
import "./TarjetaPokemon.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const TarjetaPokemon = ({ pokemon, setlistaDePokemones }) => {
  const borrarPokemon = async () => {
    const respuesta = await fetch(
      `http://localhost:1234/pokemon/${pokemon.nombre}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (respuesta.ok) {
      setlistaDePokemones((listaPrevia) =>
        listaPrevia.filter((p) => p.id !== pokemon.id)
      );
    }
  };

  return (
    <div className="div-relativo">
      <Link className="linkDetalles" to={`detalles/${pokemon.id}`}>
        <li id="tarjetATK" className={pokemon.tipo[0]}>
          <div className="contenedorPokemones">
            <p id="tarjetaId" className={pokemon.tipo[0] + "_id"}>
              #{pokemon.id}
            </p>
            <center>
              {<img className="tarjetaImg" src={pokemon.imagen} alt="foto" />}
            </center>
            <p className={pokemon.tipo[0] + "_background"} id="tarjetaNombre">
              {pokemon.nombre}
            </p>
          </div>
        </li>
      </Link>
      <button onClick={borrarPokemon} className="boton-borrar" type="button">
        x
      </button>
    </div>
  );
};

export default TarjetaPokemon;
