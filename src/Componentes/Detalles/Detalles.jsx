import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";
import Peso from "../../imagenes/Weight.svg";
import Alto from "../../imagenes/Height.svg";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Frame from "../../imagenes/Frame.svg";
import { useState, useEffect } from "react";

const Detalles = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cargarPokemones = async () => {
      try {
        const respuesta = await fetch(`http://localhost:1234/pokemon/${id}`);

        if (!respuesta.ok) {
          throw new Error("Error en el servidor");
        }

        const pokemonesFetch = await respuesta.json();

        setPokemon(pokemonesFetch);
      } catch (error) {
        navigate("/notfound", { replace: true });
        console.log("No se pudo conectar con el backend");
        // AGREGAR RUTA A NAVIGATE
      }
    };
    cargarPokemones();
  }, [id]);

  return (
    pokemon.nombre && (
      <div className={pokemon.tipo[0]} id="contenedorDetalles">
        <section className="arriba">
          <div className="flechaNombre">
            <Link className="volver" to="/pokedex">
              <img className="flechita" src={Flecha} alt="flecha" />
            </Link>
            <h1>{pokemon.nombre}</h1>
          </div>
          <h5 style={{ color: "white" }}>#{pokemon.id}</h5>
        </section>
        <div className="contenedorImgPokemon">
          {pokemon.prev ? (
            <Link
              className="flechitaLeft"
              to={`/pokedex/detalles/${pokemon.prev}`}
            >
              <img src={Frame} alt="flecha" />
            </Link>
          ) : (
            <div></div>
          )}
          <img className="fotoPokemon" src={pokemon.imagen} alt="foto" />
          {pokemon.next ? (
            <Link
              className="flechitaRight"
              to={`/pokedex/detalles/${pokemon.next}`}
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
            {pokemon.tipo.map((tipo) => (
              <span className={tipo.toLowerCase()}>{tipo}</span>
            ))}
          </p>

          <h3>About</h3>

          <section className="caracteristicas">
            <div className="centrado">
              <div className="parejas">
                <img src={Peso} alt="peso" />
                <p>{pokemon.peso}</p>
              </div>
              <h6>Weight</h6>
            </div>
            <div className="borde centrado">
              <div className="parejas">
                <img src={Alto} alt="alto" />
                <p>{pokemon.altura}</p>
              </div>
              <h6>Height</h6>
            </div>
            <div className="centrado">
              <p>
                {pokemon.habilidades.map((movimiento) => {
                  return <div>{movimiento}</div>;
                })}
              </p>
              <h6>Moves</h6>
            </div>
          </section>
          <p>{pokemon.descripcion}</p>
          <section>
            <h3>Base stats</h3>
            <div className="baseStats">
              <div className="habilidades">
                {Object.entries(pokemon.base).map(
                  ([nombreDeLaProp, valorDeLaProp]) => (
                    <p>{nombreDeLaProp}</p>
                  )
                )}
              </div>
              <div className="valores">
                {Object.entries(pokemon.base).map(
                  ([nombreDeLaProp, valorDeLaProp]) => (
                    <p>{valorDeLaProp}</p>
                  )
                )}
              </div>
              <div className="progress">
                {Object.entries(pokemon.base).map(
                  ([nombreDeLaProp, valorDeLaProp]) => (
                    <div>
                      <div
                        id="progressValue"
                        className={pokemon.tipo[0]}
                        style={{
                          width: `${valorDeLaProp / 2}%`,
                        }}
                      ></div>
                      <div
                        id="progressBar"
                        className={pokemon.tipo[0]}
                        style={{
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

          {/* <div>{Object.entries(pokemon.evolution)}</div> */}
        </section>
      </div>
    )
  );
};

export default Detalles;
