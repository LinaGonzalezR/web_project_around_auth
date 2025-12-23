{PopupState && (
<Popup title={PopupState.title} onClose={() => setPopupState(null)}>
{" "}
{PopupState.children}{" "}
</Popup>
)} //Copiado de App.jsx

          {/*<section className="popup popup__delete" id="popup__delete">
          <div className="popup__container popup__container-delete">
            <div className="popup__close">
              <img


                src="./images/CloseIcon.svg"
                alt="Icono de cerrar ventana"
                className="popup__image"
              />
            </div>
            <h3 className="form__title">¿Estás seguro?</h3>
            <button type="submit" className="button__form">
              Sí
            </button>
          </div>
        </section>

  <section className="card__box"></section> */}  //Copiado de App.jsx

/_const card = [
{
isLiked: false,
_id: "",
name: "",
link: "",
owner: "",
createdAt: "",
},
{
isLiked: false,
_id: "5d1f064ed321eb4bdcd707de",
name: "Lake Louise",
link: "zattps://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
owner: "5d1f0611d321eb4bdcd707dd",
createdAt: "2019-07-05T08:11:58.324Z",
},
];_/

{cards.map((card) => (
<Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
))}
