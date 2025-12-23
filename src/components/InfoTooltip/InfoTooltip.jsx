import successIcon from "../../images/success.svg";
import failIcon from "../../images/fail.svg";


export default function InfoTooltip({ isOpen, onClose, isSuccess }) {
    return (
         <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={onClose}></button>
                <div className="popup__info">
                    <img
                    src={isSuccess ? successIcon : failIcon}
                    alt={isSuccess ? "Éxito" : "Error"}
                    className="popup__info-icon"
                    />
                    <p className="popup__info-text">
                        {isSuccess
                        ? "¡Te has registrado con éxito!"
                        : "Algo salió mal. Por favor, inténtalo de nuevo."}
                    </p>
                </div>
             </div>
        </div>
    );
}