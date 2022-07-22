import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import ".//AgregarPokemon.css";
import { useNavigate } from "react-router-dom";

const Agregar = () => {
  const [nombre, setNonmbre] = useState("");
  const [id, setId] = useState("");
  const [tipo1, setTipo1] = useState("");
  const [tipo2, setTipo2] = useState("");

  const [HP, setHP] = useState("");
  const [ATK, setATK] = useState("");
  const [SATK, setSATK] = useState("");
  const [SDEF, setSDEF] = useState("");
  const [SPD, setSPD] = useState("");

  const [descripcion, setDescripcion] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [movimiento1, setMovimiento1] = useState("");
  const [movimiento2, setMovimiento2] = useState("");

  let navigate = useNavigate();

  const handleChangeNombre = (evento) => {
    setNonmbre(evento.target.value);
  };
  const handleChangeId = (evento) => {
    setId(evento.target.value);
  };
  const handleChangeTipo1 = (evento) => {
    setTipo1(evento.target.value);
  };
  const handleChangeTipo2 = (evento) => {
    setTipo2(evento.target.value);
  };
  const handleChangeHP = (evento) => {
    setHP(evento.target.value);
  };
  const handleChangeATK = (evento) => {
    setATK(evento.target.value);
  };
  const handleChangeSATK = (evento) => {
    setSATK(evento.target.value);
  };
  const handleChangeSDEF = (evento) => {
    setSDEF(evento.target.value);
  };
  const handleChangeSPD = (evento) => {
    setSPD(evento.target.value);
  };
  const handleChangeDescripcion = (evento) => {
    setDescripcion(evento.target.value);
  };
  const handleChangeConfirmPeso = (evento) => {
    setPeso(evento.target.value);
  };
  const handleChangeConfirmAltura = (evento) => {
    setAltura(evento.target.value);
  };
  const handleChangeConfirmMovimiento1 = (evento) => {
    setMovimiento1(evento.target.value);
  };
  const handleChangeConfirmMovimiento2 = (evento) => {
    setMovimiento2(evento.target.value);
  };

  const registerPokemon = async () => {
    try {
      const respuesta = await fetch("http://localhost:1234/pokemon", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          id,
          tipo1,
          tipo2,
          HP,
          ATK,
          SATK,
          SDEF,
          SPD,
          descripcion,
          peso,
          altura,
          movimiento1,
          movimiento2,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      console.log(usuarioFetch);

      navigate("/", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el backend");
      alert("Mail o contraseña incorrecta");
    }
  };

  return (
    <div className="contacto-form">
      <h1>Agregar datos de Pokemon</h1>
      <form action="/aca_se_envia_ladata.com">
        <div className="nombre-correo-mensaje">
          <div className="nombre-correo">
            <label for="nombre">Nombre</label>
            <input
              onChange={handleChangeNombre}
              className="input-largo"
              type={"nombre"}
              placeholder="Ingresar nombre"
            />
            <label for="id">ID</label>
            <input
              onChange={handleChangeId}
              className="input-largo"
              type={"id"}
              placeholder="Ingresar Id"
            />
            <label for="tipo1">Tipo1</label>
            <input
              onChange={handleChangeTipo1}
              className="input-largo"
              type={"tipo1"}
              placeholder="Ingresar tipo"
            />
            <input
              onChange={handleChangeTipo2}
              className="input-largo"
              type={"tipo2"}
              placeholder="Ingresar tipo"
            />
            <label for="HP">HP</label>
            <input
              onChange={handleChangeHP}
              className="input-largo"
              type={"HP"}
              placeholder="Ingresar HP"
            />
            <label for="ATK">ATK</label>
            <input
              onChange={handleChangeATK}
              className="input-largo"
              type={"ATK"}
              placeholder="Ingresar ATK"
            />
            <label for="SATK">SATK</label>
            <input
              onChange={handleChangeSATK}
              className="input-largo"
              type={"SATK"}
              placeholder="Ingresar SATK"
            />
            <label for="SDEF">SDEF</label>
            <input
              onChange={handleChangeSDEF}
              className="input-largo"
              type={"SDEF"}
              placeholder="Ingresar SDEF"
            />
            <label for="SPD">SPD</label>
            <input
              onChange={handleChangeSPD}
              className="input-largo"
              type={"SPD"}
              placeholder="Ingresar SPD"
            />
            <label for="descripcion">Descripcion</label>
            <input
              onChange={handleChangeDescripcion}
              className="input-largo"
              type={"descripcion"}
              placeholder="Ingresar descripcion"
            />
            <label for="peso">Ingresar peso</label>
            <input
              onChange={handleChangeConfirmPeso}
              className="input-largo"
              type={"peso"}
              placeholder="Ingresar Peso"
            />
            <label for="altura">Ingresar altura</label>
            <input
              onChange={handleChangeConfirmAltura}
              className="input-largo"
              type={"altura"}
              placeholder="Ingresar altura"
            />
            <label for="movimiento">Ingresar movimiento</label>
            <input
              onChange={handleChangeConfirmMovimiento1}
              className="input-largo"
              type={"movimiento1"}
              placeholder="Ingresar movimiento"
            />
            <input
              onChange={handleChangeConfirmMovimiento2}
              className="input-largo"
              type={"movimiento2"}
              placeholder="Ingresar movimiento"
            />
          </div>
        </div>
        <div className="boton-centro">
          <button
            onClick={registerPokemon}
            className="boton-form"
            type="button"
          >
            Agregar Pokemon
          </button>
        </div>
      </form>
    </div>
  );
};

export default Agregar;
