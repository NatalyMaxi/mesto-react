function ImagePopup () {
   return (
      <div className="popup popup_type_image">
         <div className="popup__pictures-container">
            <button className="popup__close" type="button"></button>
            <figure className="popup__figure">
               <img className="popup__img" src="#" alt="#" />
               <figcaption className="popup__caption"></figcaption>
            </figure>
         </div>
      </div>
)
}

export default ImagePopup;