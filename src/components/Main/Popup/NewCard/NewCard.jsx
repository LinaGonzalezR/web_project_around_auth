import CloseIcon from "../../../../images/CloseIcon.svg";

const NewCard = ({ onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit} name="form2" id="form2">
      <img
        src={CloseIcon}
        alt="Icono de cerrar ventana"
        className="popup__image"
      />
      <h3 className="form__title">Nuevo lugar</h3>
      <input
        type="text"
        placeholder="Titulo"
        id="input-title"
        className="form__input"
        minLength="2"
        maxLength="30"
        required
        name="name"
      />
      <span className="form__input-error input-title-error"></span>

      <input
        type="url"
        placeholder="Enlace de la imagen"
        id="input-link"
        className="form__input"
        required
        name="link"
      />
      <span className="form__input-error input-link-error"></span>
      <button type="submit" className="button__form button__form_disabled">
        Crear
      </button>
    </form>
  );
};

export default NewCard;
