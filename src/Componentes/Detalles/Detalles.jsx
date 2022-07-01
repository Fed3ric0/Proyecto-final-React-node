import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";
import Peso from "../../imagenes/Weight.svg";
import Alto from "../../imagenes/Height.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Frame from "../../imagenes/Frame.svg";

const Detalles = ({ pokemones }) => {
  const { nombre } = useParams();
  console.log(nombre);
  const pokemon = pokemones.find(
    (pokemon) => pokemon.name.toLowerCase() === nombre
  );

  const pokemonIndex = pokemones.findIndex(
    (pokemon) => pokemon.name.toLowerCase() === nombre
  );

  let foto = require(`../../imagenes/${pokemon.name.toLowerCase()}.png`);

  return (
    <div
      style={{ backgroundColor: pokemon.color }}
      className="contenedorDetalles"
    >
      <section className="arriba">
        <div className="flechaNombre">
          <Link className="volver" to="/">
            <img className="flechita" src={Flecha} alt="flecha" />
          </Link>
          <h1>{pokemon.name}</h1>
        </div>
        <h5 style={{ color: "white" }}>#{pokemon.id}</h5>
      </section>
      <div className="contenedorImgPokemon">
        {pokemonIndex > 0 ? (
          <Link
            className="flechitaLeft"
            to={`/detalles/${pokemones[pokemonIndex - 1].name.toLowerCase()}`}
          >
            <img src={Frame} alt="flecha" />
          </Link>
        ) : (
          <div></div>
        )}
        <img className="fotoPokemon" src={foto} alt="foto" />
        {pokemonIndex < pokemones.length - 1 ? (
          <Link
            className="flechitaRight"
            to={`/detalles/${pokemones[pokemonIndex + 1].name.toLowerCase()}`}
          >
            <img src={Frame} alt="flecha" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div></div>
      <section className="abajo">
        <p className="tipos">
          {pokemon.type.map((type) => (
            <span className={type.toLowerCase()}>{type}</span>
          ))}
        </p>

        <h3 style={{ color: pokemon.color }}>About</h3>

        <section className="caracteristicas">
          <div className="centrado">
            <div className="parejas">
              <img src={Peso} alt="peso" />
              <p>{pokemon.weight}kg</p>
            </div>
            <h6>Weight</h6>
          </div>
          <div className="borde centrado">
            <div className="parejas">
              <img src={Alto} alt="alto" />
              <p>{pokemon.height}m</p>
            </div>
            <h6>Height</h6>
          </div>
          <div className="centrado">
            <p>{pokemon.moves}</p>
            <h6>Moves</h6>
          </div>
        </section>
        <p>{pokemon.description}</p>
        <section>
          <h3 style={{ color: pokemon.color }}>Base stats</h3>
          <div className="baseStats">
            <div className="habilidades">
              {Object.entries(pokemon.stats).map(
                ([nombreDeLaProp, valorDeLaProp]) => (
                  <p style={{ color: pokemon.color }}>{nombreDeLaProp}</p>
                )
              )}
            </div>
            <div className="valores">
              {Object.entries(pokemon.stats).map(
                ([nombreDeLaProp, valorDeLaProp]) => (
                  <p>{valorDeLaProp}</p>
                )
              )}
            </div>
            <div className="progress">
              {Object.entries(pokemon.stats).map(
                ([nombreDeLaProp, valorDeLaProp]) => (
                  <div>
                    <div
                      className="progressValue"
                      style={{
                        width: `${valorDeLaProp / 2}%`,
                        backgroundColor: pokemon.color,
                      }}
                    ></div>
                    <div
                      className="progressBar"
                      style={{
                        backgroundColor: pokemon.color,
                        opacity: "0.1",
                        flex: "1",
                      }}
                    ></div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </section>{" "}
    </div>
  );
};

export default Detalles;
