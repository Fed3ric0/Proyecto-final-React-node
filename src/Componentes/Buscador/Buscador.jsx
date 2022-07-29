import React from "react";
import { useState, useEffect } from "react";
import "./Buscador.css";
import Pokeball from "../../imagenes/Pokeball.png";
import Arrow from "../../imagenes/Arrow.svg";
import TarjetaPokemon from "../TarjetaPokemon/TarjetaPokemon";
import { Link } from "react-router-dom";
import add from "../../imagenes/add.png";

const Buscador = () => {
  const [ordenarPorId, setOrdenarPorId] = useState(true);
  const [listaDePokemones, setlistaDePokemones] = useState([]);
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    cargarPokemones();
  }, []);

  const cargarPokemones = async () => {
    try {
      const respuesta = await fetch("http://localhost:1234/pokemon", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const pokemonesFetch = await respuesta.json();

      setlistaDePokemones(pokemonesFetch);
      setPokemones(pokemonesFetch);
    } catch (error) {
      console.log("No se pudo conectar con backend");
    }
  };

  const filtrar = (evento) => {
    const listaDePokemones = pokemones.filter((pokemon) =>
      pokemon.nombre.toLowerCase().includes(evento.target.value.toLowerCase())
    );
    setlistaDePokemones(listaDePokemones);
  };
  const mostrarPokemones = () => {
    return listaDePokemones.map((elemento) => (
      <TarjetaPokemon
        key={elemento.id}
        pokemon={elemento}
        setlistaDePokemones={setlistaDePokemones}
      />
    ));
  };

  const ordenar = () => {
    if (ordenarPorId === false) {
      const listaOrdenada = pokemones.sort((a, b) => {
        return a.id - b.id;
      });
      setlistaDePokemones(listaOrdenada);
      setOrdenarPorId(true);
    } else {
      const listaOrdenada = pokemones.sort(function (a, b) {
        let x = a.nombre.toLowerCase();
        let y = b.nombre.toLowerCase();
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
            <h1>Pokédex</h1>
          </div>
          <div onClick={ordenar} className="logostitulo">
            <h4>{ordenarPorId ? "#" : "A Z"}</h4>
            <img src={Arrow} alt="flecha" />
          </div>
        </div>
        <input
          className="iconoPlaceHolder"
          type="search"
          placeholder="Buscar"
          onChange={filtrar}
        />
      </nav>
      <ul>
        <div>
          <Link to="/agregar">
            <div class="botonParaAgregar"></div>
          </Link>{" "}
        </div>
        {mostrarPokemones()}
      </ul>
    </div>
  );
};

export default Buscador;
