import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import PopupWithForm from './PopupWithForm.js'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

   const currentUserContext = React.useContext(CurrentUserContext);
   const [name, setName] = React.useState('');
   const [description, setDescription] = React.useState('');

   React.useEffect(() => {
      setName(currentUserContext.name);
      setDescription(currentUserContext.about);
   }, [currentUserContext, isOpen]); 

   function handleChangeName(evt) {
      setName(evt.target.value)
   };

   function handleChangeDescription(evt) {
      setDescription(evt.target.value)
   };

   function handleSubmit(evt) {
      evt.preventDefault();
      onUpdateUser({
         username: name,
         job: description
      })
   };

   return (
      <PopupWithForm
         popup="edit"
         name="subscribeForm"
         title="Редактировать профиль"
         text="Сохранить"
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input id="name" minLength="2" maxLength="40" required type="text" className="form__item" name="username" placeholder="Имя" value={name || ''} onChange={handleChangeName} />
         <span className="name-error form__error form__error_place_top"></span>
         <input id="info" minLength="2" maxLength="200" required type="text" className="form__item" name="job" placeholder="О себе" value={description || ''} onChange={handleChangeDescription} />
         <span className="info-error form__error  form__error_place_bottom"></span>
      </PopupWithForm> 
   )
}

export default EditProfilePopup;