import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleChangeMail = (evento) => {
    setMail(evento.target.value);
  };
  const handleChangePass = (evento) => {
    setPassword(evento.target.value);
  };

  const loginUsuario = async () => {
    try {
      const respuesta = await fetch("http://localhost:1234/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const usuarioFetch = await respuesta.json();
      localStorage.setItem("token", usuarioFetch.token);

      navigate("/pokedex", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el backend");
      alert("algo de los datos ingresados no es correcto");
    }
  };

  return (
    <div className="contacto-form">
      <h1>Ingresar</h1>
      <form action="/aca_se_envia_ladata.com">
        <div className="nombre-correo-mensaje">
          <div className="nombre-correo">
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
              placeholder="Ingresar contraseña"
            />
          </div>
        </div>
        <div className="boton-centro">
          <button
            // onSubmit={handleSubmit}
            onClick={loginUsuario}
            className="boton-form"
            type="button"
          >
            Ingresar
          </button>

          <p>No tenés cuenta?</p>
          <Link to={"/registro"}>
            <button className="boton-form">Registrate!</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
