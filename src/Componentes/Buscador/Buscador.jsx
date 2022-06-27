import React from "react";
import "./Buscador.css";
import Pokeball from '../../imagenes/Pokeball.png'
import Arrow from '../../imagenes/Arrow.svg'

const Buscador = (props) => {
  return (
    <div>
      <nav>
        <div className="nav1">
          <div className="logostitulo">
            <img className="fotologo" src= {Pokeball} alt="logo" />
            <h1> Pokedex</h1>
          </div>
          <div className="logostitulo">
            <h4>#</h4> <img src={Arrow} alt="flecha" />
          </div>
        </div>
        <input className="iconoPlaceHolder" type="search" placeholder= " Buscar..."/>
        <div></div>
      </nav>
      <ul>
        <li className="Bulbasaur">
        </li>
        <li className="Charmander"></li>
        <li className="Squirtle"></li>
        <li className="Butterfree"></li>
        <li className="Pikachu"></li>
        <li className="Gastly"></li>
        <li className="Ditto"></li>
        <li className="Mew"></li>
        <li className="Aron"></li>
      </ul>
    </div>
  );
};

export default Buscador;
