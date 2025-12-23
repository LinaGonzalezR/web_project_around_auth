import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

/*import { register, login, checkToken} from "../../utils/auth.js";*/
import CurrentUserContext from "../../contexts/CurrentUserContext";

import * as auth from "../../utils/auth.js";

/*import api from "../../utils/Api";
import Footer from "../Footer/Footer";
import "../../index.css";*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [currentUser] = useState({
    name: "Usuario",
    about: "Ex|plorador",
    avatar: ""
  });

  const [cards] = useState([]);
  const [popup, setPopup] = useState(null);

const navigate = useNavigate();  

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth.checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setUserEmail(res.data.email);
        })
        .catch((err) => {
          console.log(err)

          if (err.includes("400")) {
            console.log("Token no proporcionado o en formato incorrecto");
          }
          if(err.includes("401")) {
            console.log("El Token proporcionado es inválido");
          }

          localStorage.removeItem("jwt");
          setIsLoggedIn(false);
          setUserEmail("");
        });
  }
}, []);

  function handleLogin(email, password) {
    auth.login(email, password)
      .then((res) => {
      localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setUserEmail(email);
        navigate("/");
      })
      .catch(() => {
        setIsSuccess(false);
        setIsTooltipOpen(true);
      });
  }

  function handleRegisterSuccess(email, password) {
    auth.register(email, password)
    .then(() => {
      setIsSuccess(true);
      setIsTooltipOpen(true);
      navigate("/signin");
    })
    .catch(() => {
      setIsSuccess(false);
      setIsTooltipOpen(true);
    });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/signin");
  }

function closeTooltip() {
    setIsTooltipOpen(false);
    setIsSuccess(false);
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <CurrentUserContext.Provider value={{ currentUser }}>
                <Main 
                cards={cards}
                popup={popup}
                onOpenPopup={setPopup}
                onClosePopup={() => setPopup(null)}
                handleCardLike={() => {}}
                handleCardDelete={() => {}}
                handleAddCard={() => {}}
                handleUpdateAvatar={() => {}}
                />
                </CurrentUserContext.Provider>
            </ProtectedRoute>
          }
        />

        <Route
          path="/signin"
          element={<Login onLogin={handleLogin} />}
        />

        <Route
          path="/signup"
          element={<Register onRegisterSuccess={handleRegisterSuccess} />}
        />
      </Routes>

      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={closeTooltip}
        isSuccess={isSuccess}
      />
    </>
  );
}

export default App;