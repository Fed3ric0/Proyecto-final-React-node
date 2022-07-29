import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./Registro.css";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [nombre, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();

  const handleChangeName = (evento) => {
    setName(evento.target.value);
  };
  const handleChangeMail = (evento) => {
    setMail(evento.target.value);
  };
  const handleChangePass = (evento) => {
    setPassword(evento.target.value);
  };
  const handleChangeConfirmPass = (evento) => {
    setPasswordConfirmation(evento.target.value);
  };

  const registerUsuario = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:1234/register", {
        method: "POST",
        body: JSON.stringify({ nombre, email, password, passwordConfirmation }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      // const usuarioFetch = await respuesta.json();
      // console.log(usuarioFetch);

      navigate("/", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el backend");
      alert("Mail o contraseña incorrecta");
    }
  };

  return (
    <div className="contacto-form">
      <h1>Register</h1>
      <form>
        <div className="nombre-correo-mensaje">
          <div className="nombre-correo">
            <label for="name">Nombre</label>
            <input
              onChange={handleChangeName}
              className="input-largo"
              type={"name"}
              placeholder="Ingresar nombre"
            />

            <label for="email">Email</label>
            <input
              onChange={handleChangeMail}
              className="input-largo"
              type={"email"}
              placeholder="Ingresar mail"
            />
            <label for="password">Contraseña</label>
            <input
              onChange={handleChangePass}
              className="input-largo"
              type="password"
              placeholder="Contraseña"
            />
            <label for="passwordConfirmation">Confirmar contraseña</label>
            <input
              onChange={handleChangeConfirmPass}
              className="input-largo"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>
        </div>
        <div className="boton-centro">
          <button
            onClick={registerUsuario}
            className="boton-form"
            type="button"
          >
            Unirse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
