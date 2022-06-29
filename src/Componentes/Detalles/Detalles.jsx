import React from "react";
import "./Detalles.css";
import Flecha from "../../imagenes/arrow-left.svg";
import foto from "../../imagenes/ditto.png"

const Detalles = ({ pokemon }) => {
  return (
    <div className="contenedor">

      <section className="arriba">
        <div className="flechaNombre">
          <img src={Flecha} alt="flecha" />
          <h1>nombre</h1>
        </div>
        <p>#id</p>
      </section>

      <section className="abajo">

        <img src={foto} alt="" />
        <p>tipo</p>


      </section>




    </div>
  );
};

export default Detalles;
