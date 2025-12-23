import { useRef } from "react";

import CloseIcon from "../../../../images/CloseIcon.svg";

const EditAvatar = ({ onSubmit }) => {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      name="form-avatar"
      id="form-avatar"
      noValidate
    >
      <img
        src={CloseIcon}
        alt="Icono de cerrar ventana"
        className="popup__image"
      />
      <h3 className="form__title">Actualizar Foto</h3>
      <input
        type="url"
        placeholder="Enlace de la nueva imagen"
        className="form__input"
        required
        name="avatar"
        id="input-avatar"
        ref={avatarRef}
      />
      <span className="form__input-error input-avatar-error"></span>
      <button type="submit" className="button__form button__form_disabled">
        Guardar
      </button>
    </form>
  );
};

export default EditAvatar;
