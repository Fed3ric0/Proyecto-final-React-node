import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscador from "./Componentes/Buscador/Buscador";
import Detalles from "./Componentes/Detalles/Detalles";
import Login from "./Componentes/Login/Login";
import Registro from "./Componentes/Registro/Registro";
import AgregarPokemon from "./Componentes/AgregarPokemon/AgregarPokemon";
// import pokedex from "./pokedex.json";
import ScrollToTop from "./Componentes/ScrollToTop/ScrollToTop";
import NotFound from "./Componentes/NotFound/NotFound";

function App() {
  // const [listaDePokemones, setlistaDePokemones] = useState([]);
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    cargarPokemones();
  }, []);

  const cargarPokemones = async () => {
    try {
      const respuesta = await fetch("http://localhost:1234/pokemon");

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const pokemonesFetch = await respuesta.json();

      // setlistaDePokemones(pokemonesFetch);
      setPokemones(pokemonesFetch);
    } catch (error) {
      console.log("No se pudo conectar con el backend");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pokedex" element={<Buscador pokemones={pokemones} />} />
          <Route
            path="/agregar"
            element={<AgregarPokemon pokemones={pokemones} />}
          />
          <Route
            path="pokedex/detalles/:id"
            element={<Detalles pokemones={pokemones} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
