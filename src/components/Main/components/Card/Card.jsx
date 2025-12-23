import React, { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import trashIcon from "../../../../images/trashIcon.svg";

export default function Card(props) {
  const { card, onCardClick, onCardLike, onCardDelete } = props;

  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser?._id;
  const isLiked = card.isLiked;

  const cardLikeButtonClassName = `card__like-icon ${
    isLiked ? "card__like-icon_active" : ""
  }`;

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      {isOwn && (
        <button
          className="card__delete"
          aria-label="Eliminar"
          onClick={handleCardDelete}
        >
          <img
            src={trashIcon}
            alt="Eliminar Carta"
            className="card__delete-icon"
          />
        </button>
      )}
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <button
          className={cardLikeButtonClassName}
          aria-label="Me Gusta"
          onClick={handleCardLike}
        ></button>
      </div>
    </div>
  );
}
