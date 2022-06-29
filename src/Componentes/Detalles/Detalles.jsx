import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";
import foto from "../../imagenes/ditto.png";
import Peso from "../../imagenes/Weight.svg";
import Alto from "../../imagenes/Height.svg";
import { useParams } from "react-router-dom";

const Detalles = ({ pokemones }) => {
  const { nombre } = useParams();
  // const pokemones = [1,2,3,4,5,6];
  const pokemon = pokemones.find(
    (pokemon) => pokemon.name.toLowerCase() ===  nombre 
  );

  let foto = require(`../../imagenes/${pokemon.name.toLowerCase()}.png`);
  return (
    <div style={{ backgroundColor: pokemon.color }} className="contenedorDetalles">
      <section className="arriba">
        <div className="flechaNombre">
          <img className="flechita" src={Flecha} alt="flecha" />
          <h1>{pokemon.name}</h1>
        </div>
        <h5 style={{ color: "white" }}>#{pokemon.id}</h5>
      </section>
      <img src={foto} alt="" />
      <section className="abajo">
        <p>{pokemon.type}</p>
        <h3 style={{ color: pokemon.color }}>About</h3>

     
      <section className="caracteristicas">
        <div>
          <div className="parejas">
            <img src={Peso} alt="peso" />
            <p>{pokemon.weight}kg</p>
          </div>
          <h6>Weight</h6>
        </div>
        <div className="borde">
          <div className="parejas">
            <img src={Alto} alt="alto" />
            <p>{pokemon.height}m</p>
          </div>
          <h6>Height</h6>
        </div>
        <div>
          <p>
            {pokemon.moves}
          </p>
          <h6>Moves</h6>
        </div>
      </section>
      <p>{pokemon.description}</p>
      <section>
        <h3 style={{ color: pokemon.color }}>Base stats</h3>
        <div className="baseStats">
          <div className="habilidades">
            <p style={{ color: pokemon.color }}>HP</p>
            <p style={{ color: pokemon.color }}>APK</p>
            <p style={{ color: pokemon.color }}>DEF</p>
            <p style={{ color: pokemon.color }}>SATK</p>
            <p style={{ color: pokemon.color }}>SDEF</p>
            <p style={{ color: pokemon.color }}>SPD</p>
          </div>
          <div className="valores">
            <p>{pokemon.HP}</p>
            <p>{pokemon.APK}</p>
            <p>{pokemon.DEF}</p>
            <p>{pokemon.SATK}</p>
            <p>{pokemon.SDEF}</p>
            <p>{pokemon.SPD}</p>
          </div>
          <div className="progress">
            <progress value={pokemon.HP} max="200" />
            <progress value={pokemon.APK} max="200" />
            <progress value={pokemon.DEF} max="200" />
            <progress value={pokemon.SATK} max="200" />
            <progress value={pokemon.SDEF} max="200" />
            <progress value={pokemon.SPD} max="200" />
          </div>
        </div>
      </section>
    </section> </div>
  );
};

export default Detalles;
