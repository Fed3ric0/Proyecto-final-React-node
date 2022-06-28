import React from "react";
import "./Buscador.css";
import Pokeball from "../../imagenes/Pokeball.png";
import Arrow from "../../imagenes/Arrow.svg";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";

const Buscador = ({ pokemones }) => {
  const mostrarPokemones = () => {
    return pokemones.map((elemento) => <TarjetaPokemon pokemon={elemento} />);
  };

  return (
    <div className="contenedo">
      <nav>
        <div className="nav1">
          <div className="logostitulo">
            <img className="fotologo" src={Pokeball} alt="logo" />
            <h1> Pokedex</h1>
          </div>
          <div className="logostitulo">
            <h4>#</h4> <img src={Arrow} alt="flecha" />
          </div>
        </div>
        <input
          className="iconoPlaceHolder"
          type="search"
          placeholder=" Buscar..."
        />
      </nav>
      <ul>{mostrarPokemones()}</ul>
    </div>
  );
};

export default Buscador;
