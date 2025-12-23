import { useState } from "react";
import { Link } from "react-router-dom";
/*import { login } from "../../utils/auth";*/
/*import { useNavigate } from "react-router-dom";*/
import "../../blocks/auth.css";

export default function Login({ onLogin }) {
  /*const navigate = useNavigate();*/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

    /*login(email, password)
      .then((res) => {
        if (res.token) {
          onLogin(email);
          navigate("/");      
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }*/

    return (
    <div className="auth">
      <h2 className="auth__title">Iniciar sesión</h2>

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
        <button type="submit" className="auth__button">Entrar</button>
      </form>

      <p className="auth__link-text">
        ¿Aún no eres miembro?  {""}
        <Link to="/signup" className="auth__link">
        Regístrate aquí</Link>
      </p>
    </div>
  );
}
