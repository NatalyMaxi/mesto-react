function PopupWithForm(props) {
   return (
      <div className={`popup popup_type_${props.name}`}>
         <div className="popup__content">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">{props.title}</h3>
            <form
               className="form"
               name={`${props.name}`}
               novalidate>
               {props.children}
            </form>
         </div>
      </div>
   )
}

export default PopupWithForm;