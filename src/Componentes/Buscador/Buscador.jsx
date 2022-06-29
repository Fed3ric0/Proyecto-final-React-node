import React from "react";
import { useState } from "react";
import "./Buscador.css";
import Pokeball from "../../imagenes/Pokeball.png";
import Arrow from "../../imagenes/Arrow.svg";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";
import Detalles from "../Detalles/Detalles";

const Buscador = ({ pokemones }) => {
  const [listaDePokemones, setlistaDePokemones] = useState(pokemones);
  const mostrarPokemones = () => {
    return listaDePokemones.map((elemento) => (
      <TarjetaPokemon pokemon={elemento} />
    ));
  };

  const filtrar = (evento) => {
    const listaDePokemones = pokemones.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(evento.target.value)
    );
    setlistaDePokemones(listaDePokemones);
  };

  /*const ordenar = () => {
    const listaOrdenada = pokemones.sort((a, b) => {
      return a.id - b.id;
    });
    setlistaDePokemones(listaOrdenada);
    console.log(listaOrdenada)
  };*/

  const ordenar = () => {
    const listaOrdenada = pokemones.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
    setlistaDePokemones(listaOrdenada);
    console.log(listaOrdenada)
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
            <h4>#</h4> <img onClick={ordenar} src={Arrow} alt="flecha" />
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
