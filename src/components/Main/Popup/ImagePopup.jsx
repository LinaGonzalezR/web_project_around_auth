import CloseIcon from "../../../images/CloseIcon.svg";

export default function ImagePopup(props) {
  const { title, children } = props;

  return (
    <section className="popup popup-image" id="popup-image">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <img
          className="popup__image-big"
          alt="Imagen ampliada"
          src={props.imageUrl}
        />
        <h3 className="popup__title"></h3>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </section>
  );
}
