/*import React, { useContext, useState } from "react";*/
import { useContext } from "react";
import Card from "./components/Card/Card";
import Avatar from "../../images/Avatar.png";
import Pen from "../../images/Pen.png";
import ButtonSymbol from "../../images/Button-Symbol.svg";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import EditProfile from "./Popup/EditProfile/EditProfile";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";


function Main({
  onOpenPopup,
  onClosePopup,
  cards,
  popup,
  handleCardLike,
  handleCardDelete,
  handleAddCard,
  handleUpdateAvatar,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const popupNewCard = {
    title: "Nuevo lugar",
    children: <NewCard onSubmit={handleAddCard} />,
  };

  const popupEditAvatar = {
    title: "Actualizar foto",
    children: <EditAvatar onSubmit={handleUpdateAvatar} />,
  };
  const popupEditProfile = {
    title: "Editar Perfil",
    children: <EditProfile onClose={onClosePopup} />,
  };

  return (
    <main>
      <section className="profile">
        <img
          src={currentUser?.avatar || Avatar}
          alt={`Foto de ${currentUser?.name || "usuario"}`}
          className="profile__image"
          onClick={() => onOpenPopup(popupEditAvatar)}
        />
        <div className="profile__data">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <h2 className="profile__subtitle">{currentUser?.about}</h2>
        </div>

        <button
          className="profile__button-small"
          onClick={() => onOpenPopup(popupEditProfile)}
        >
          <img
            src={Pen}
            alt="editar"
            /*className="profile__image-small"*/
          />
        </button>

        <button
          className="profile__button"
          onClick={() => onOpenPopup(popupNewCard)}
        >
          <img
            src={ButtonSymbol}
            alt="símbolo agregar"
            /*className="button__add"*/
          />
        </button>
      </section>

      <section className="card__box">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
      
      {popup && (
        <Popup title={popup.title} onClose={onClosePopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
};

export default Main;
