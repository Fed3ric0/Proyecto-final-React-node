import React from "react";
import { useState } from "react";
import "./Buscador.css";
import Pokeball from "../../imagenes/Pokeball.png";
import Arrow from "../../imagenes/Arrow.svg";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";

const Buscador = ({ pokemones }) => {
  const mostrarPokemones = () => {
    return listaDePokemones.map((elemento) => (
      <TarjetaPokemon pokemon={elemento} />
    ));
  };

  const [listaDePokemones, setlistaDePokemones] = useState(pokemones);

  const filtrar = (evento) => {
    const listaDePokemones = pokemones.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(evento.target.value)
    );
    setlistaDePokemones(listaDePokemones);
  };

  const [ordenarPorId, setOrdenarPorId] = useState(false);
  const ordenar = () => {
    if (ordenarPorId === false) {
      const listaOrdenada = pokemones.sort((a, b) => {
        return a.id - b.id;
      });
      setlistaDePokemones(listaOrdenada);
      setOrdenarPorId(true);
    } else {
      const listaOrdenada = pokemones.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setlistaDePokemones(listaOrdenada);
      setOrdenarPorId(false);
    }
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
            <h4>{ordenarPorId ? "#" : "A Z"}</h4>{" "}
            <img onClick={ordenar} src={Arrow} alt="flecha" />
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
