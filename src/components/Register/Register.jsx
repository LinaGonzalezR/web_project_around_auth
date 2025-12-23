import { useState } from "react";
import { register } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Register({ onRegisterSuccess }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    register(email, password)
      .then(() => {
        onRegisterSuccess(true);
        navigate("/signin");
      })
      .catch(() => {
        onRegisterSuccess(false);
        });
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Regístrate</h2>

      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth__button">Registrar</button>
      </form>

      <p className="auth__link-text">
        ¿Ya tienes una cuenta?{" "}
        <a href="/signin" className="auth__link">Inicia sesión</a>
      </p>
    </div>
  );
}