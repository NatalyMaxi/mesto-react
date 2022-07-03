function ImagePopup(props) {

   return (
      <div className={`popup popup_type_image ${props.card.link ? "popup_is-active" : ""}`}>
         <div className="popup__pictures-container">
            <button className="popup__close" type="button" onClick={props.onClose}></button>
            <figure className="popup__figure">
               <img className="popup__img" src={props.card.link} alt={props.card.name} />
               <figcaption className="popup__caption">{props.card.name}</figcaption>
            </figure>
         </div>
      </div>
   )
}

export default ImagePopup;