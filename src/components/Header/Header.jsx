import { Link } from "react-router-dom";
import Logo from "../../images/Header.png";

export default function Header ({ isLoggedIn, onLogout, userEmail }) {
  return (
    <header className="header">
      <img src={Logo} alt="logo alrededor de" className="header__logo" />

      {isLoggedIn ? (
        <div className="header__user">
          <p className="header__email"> {userEmail} </p>
          <button className="header__logout" type="button" onClick={onLogout}>
            Salir
          </button>
        </div>
          ) : (
            <nav className="header__nav">
              <Link to="/signin" className="header__link">
                Iniciar sesión
              </Link>
              <Link to="/signup" className="header__link">
                Regístrate
              </Link>
              </nav>
      )}
    </header>
  );
}