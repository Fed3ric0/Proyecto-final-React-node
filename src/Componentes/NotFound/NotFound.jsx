import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="no_encontrado">
      <h1>
        Lo sentimos, la pagina que estas buscando no fue encontrada. <br />
      </h1>
      <h1>Por favor, redirigete a la Pokedex </h1>
      <Link to={"/pokedex"}>
        <button className="boton-not-found">Ir a la Pokedex</button>
      </Link>
    </div>
  );
};

export default NotFound;
