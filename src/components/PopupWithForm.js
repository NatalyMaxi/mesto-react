function PopupWithForm(props) {

   const popupIsActive = props.isOpen ? 'popup_is-active' : '';
   return (
      <div className={`popup popup_type_${props.popup} ${popupIsActive}`}>
         <div className="popup__content">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">{props.title}</h3>
            <form
               className="form"
               name={`${props.name}`}
               noValidate>
               {props.children}
            </form>
         </div>
      </div>
   )
}

export default PopupWithForm;