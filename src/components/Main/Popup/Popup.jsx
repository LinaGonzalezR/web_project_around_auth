export default function Popup(props) {
  const { title, children, onClose } = props;

  return (
    <div className="popup popup-opened">
      <div className="popup__container">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
