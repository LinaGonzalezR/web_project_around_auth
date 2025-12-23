import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import CloseIcon from "../../../../images/CloseIcon.svg";
import { useContext, useState, useEffect } from "react";

export default function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setDescription(currentUser.description || "");
    }
  }, [currentUser]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
    onClose();
  };

  return (
    <form
      className="form"
      name="form1"
      id="form1"
      noValidate
      onSubmit={handleSubmit}
    >
      <h3 className="form__title">Editar Perfil</h3>
      <input
        type="text"
        placeholder="Nombre"
        id="input-nombre"
        className="form__input"
        minLength="2"
        maxLength="40"
        required
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <span className="form__input-error input-nombre-error"></span>
      <input
        type="text"
        placeholder="Acerca de mí"
        id="input-mi"
        className="form__input"
        minLength="2"
        maxLength="200"
        required
        name="about"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="form__input-error input-mi-error"></span>
      <button type="submit" className="button__form">
        Guardar
      </button>
      <img
        src={CloseIcon}
        alt="Icono de cerrar ventana"
        className="popup__image"
        onClick={onClose}
      />
    </form>
  );
}
