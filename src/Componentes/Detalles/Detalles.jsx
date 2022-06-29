import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";
import foto from "../../imagenes/ditto.png";
import Peso from "../../imagenes/Weight.svg";
import Alto from "../../imagenes/Height.svg";

const Detalles = ({ pokemon }) => {
  return (
    <div className="contenedorDetalles">
      <section className="arriba">
        <div className="flechaNombre">
          <img src={Flecha} alt="flecha" />
          <h1>nombre</h1>
        </div>
        <h5>#id</h5>
      </section>

      <section className="abajo">
        <img src={foto} alt="" />
        <p>tipo</p>

        <h3>About</h3>
      </section>
      <section className="caracteristicas">
        <div>
          <div className="parejas">
            <img src={Peso} alt="peso" />
            <p>6,8kg</p>
          </div>
          <h6>Weight</h6>
        </div>
        <div className="borde">
          <div className="parejas">
            <img src={Alto} alt="alto" />
            <p>0,7m</p>
          </div>
          <h6>Height</h6>
        </div>
        <div>
          <p>
            Chlorophyll <br /> overgrow
          </p>
          <h6>Moves</h6>
        </div>
      </section>
      <p>descripcion</p>
      <section>
        <h3>Base stats</h3>
        <div className="baseStats">
          <div className="habilidades">
            <p>HP</p>
            <p>ATK</p>
            <p>DEF</p>
            <p>STAK</p>
            <p>SDEF</p>
            <p>SPD</p>
          </div>
          <div className="valores">
            <p>valor</p>
            <p>valor</p>
            <p>valor</p>
            <p>valor</p>
            <p>valor</p>
            <p>valor</p>
          </div>
          <div className="progress">
            <progress value= "25" max="100"/>
            <progress/>
            <progress/>
            <progress/>
            <progress/>
            <progress/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detalles;
