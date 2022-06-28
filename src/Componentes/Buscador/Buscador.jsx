import React from "react";
import { useState } from "react";
import "./Buscador.css";
import Pokeball from "../../imagenes/Pokeball.png";
import Arrow from "../../imagenes/Arrow.svg";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";

const Buscador = ({ pokemones }) => {
  const [listaDePokemones, setlistaDePokemones] = useState(pokemones);
  const mostrarPokemones = () => {
    return listaDePokemones.map((elemento) => (
      <TarjetaPokemon pokemon={elemento} />
    ));
  };

  const filtrar = (evento) => {
    const listaDePokemones = pokemones.filter((pokemones) =>
      pokemones.name.toLowerCase().includes(evento.target.value)
    );
    setlistaDePokemones(listaDePokemones);
  };

  return (
    <div className="contenedor">
      <nav>
        <div className="nav1">
          <div className="logostitulo">
            <img className="fotologo" src={Pokeball} alt="logo" />
            <h1> Pokédex</h1>
          </div>
          <div className="logostitulo">
            <h4>#</h4> <img src={Arrow} alt="flecha" />
          </div>
        </div>
        <input
          className="iconoPlaceHolder"
          type="search"
          placeholder=" Buscar..."
          onChange={filtrar}
        />
      </nav>
      <ul>{mostrarPokemones()}</ul>
    </div>
  );
};

export default Buscador;
