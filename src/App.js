import "./App.css";
import React from "react";
import Buscador from "./Componentes/Buscador/Buscador";
import Detalles from "./Componentes/Detalles/Detalles";
import TarjetaPokemon from "./Componentes/TarjetaPokemon/TarjetaPokemon";
import imgAron from "./imagenes/aron.png";

function App() {
  const pokemones = [
    {
      name: "Aron",
      id: 304,
      image: { imgAron },
      type: ["Steel", "Rock"],
      weight: 60.0,
      height: 0.4,
      moves: ["Sturdy", "Rock-Head"],
      description:
        "it eats iron ore - and sometimes railroad tracks - to build up the the steel armor that protects its body.",
      HP: 50,
      APK: 70,
      DEF: 100,
      SATK: 40,
      SDEF: 40,
      SPD: 30,
    },
    {
      name: "Bulbasaur",
      id: 1,
      image: "../imagenes/bulbasaur.png",
      type: ["Grass", "Poison"],
      weight: 6.9,
      height: 0.7,
      moves: "Chlorophyll Overgrow",
      description:
        "there is a plant seed on its back right from the day this Pokemon is born. the seed slowly grows larger",
      HP: 45,
      APK: 49,
      DEF: 49,
      SATK: 65,
      SDEF: 65,
      SPD: 45,
    },
    {
      name: "Butterfree",
      id: 12,
      image: "../imagenes/butterfree.png",
      type: ["Bug", "Flying"],
      weight: 32,
      height: 1.1,
      moves: ["Compound-Eyes", "Tinted-Lens"],
      description:
        "in battle, it flaps its wings at great speed to release highly toxic dust into the air",
      HP: 80,
      APK: 45,
      DEF: 50,
      SATK: 90,
      SDEF: 80,
      SPD: 70,
    },
    {
      name: "Charmander",
      id: 4,
      image: "../imagenes/charmander.png",
      type: "Fire",
      weight: 8.5,
      height: 0.6,
      moves: ["Mega-Punch", "Fire-Punch"],
      description:
        "it has a preference for hot things. when it rains, steam is said to spout from the tip of his tail.",
      HP: 39,
      APK: 52,
      DEF: 43,
      SATK: 60,
      SDEF: 50,
      SPD: 65,
    },
    {
      name: "Ditto",
      id: 132,
      image: "../imagenes/ditto.png",
      type: "Normal",
      weight: 4.0,
      height: 0.3,
      moves: "Limber Imposter",
      description:
        "it can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
      HP: 48,
      APK: 48,
      DEF: 48,
      SATK: 48,
      SDEF: 48,
      SPD: 48,
    },
    {
      name: "Gastly",
      id: 92,
      image: "../imagenes/gastly.png",
      type: ["Ghost", "Type"],
      weight: 0.1,
      height: 1.3,
      moves: "Levitate",
      description:
        "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
      HP: 30,
      APK: 35,
      DEF: 30,
      SATK: 100,
      SDEF: 35,
      SPD: 80,
    },
    {
      name: "Mew",
      id: 152,
      image: "../imagenes/mew.png",
      type: "Psychic",
      weight: 4.0,
      height: 0.4,
      moves: "Syncronize",
      description:
        "when viewed through a microscope, this Pokemon`s short, fine, delicate hair can be seen.",
      HP: 100,
      APK: 100,
      DEF: 100,
      SATK: 100,
      SDEF: 100,
      SPD: 100,
    },
    {
      name: "Pikachu",
      id: 25,
      image: "../imagenes/pikachu.png",
      type: "Electric",
      weight: 6.0,
      height: 0.4,
      moves: ["Mega-Punch", "Pay-Day"],
      description:
        "Pikachu that can generate powerful electricity have cheek sact that are extra soft and super stretchy.",
      HP: 35,
      APK: 55,
      DEF: 40,
      SATK: 50,
      SDEF: 50,
      SPD: 90,
    },
    {
      name: "Squirtle",
      id: 7,
      image: "../imagenes/squirtle.png",
      type: "Water",
      weight: 9.0,
      height: 0.5,
      moves: ["Torrent", "Rain-Dish"],
      description:
        "When it retracts its long neck into its shell, it squirts out  water with vigorous force.",
      HP: 44,
      APK: 48,
      DEF: 65,
      SATK: 50,
      SDEF: 64,
      SPD: 43,
    },
  ];
  return (
    <div className="App">
      <Buscador pokemones={pokemones} />
      <Detalles />
      <TarjetaPokemon />
    </div>
  );
}

export default App;
