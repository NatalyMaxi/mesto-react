import React from 'react';
import PopupWithForm from './PopupWithForm.js'

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

   const [link, setlink] = React.useState('');
   const [title, setTitle] = React.useState('');

   function handleChangeTitle(evt) {
      setTitle(evt.target.value)
   }

   function handleChangelink(evt) {
      setlink(evt.target.value)
   };

   function handleSubmit(evt) {
      evt.preventDefault()
      onAddPlace({
         name: title,
         link: link
      })
   }

   return (
      <PopupWithForm
         popup="add"
         name="add-images"
         title="Новое место"
         text="Создать"
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input id="region" minLength="2" maxLength="30" required type="text" placeholder="Название"
            className="form__item" name="name" value={title} onChange={handleChangeTitle} />
         <span className="region-error form__error form__error_place_top"></span>
         <input id="link" required type="url" placeholder="Ссылка на картинку" className="form__item" name="link" value={link} onChange={handleChangelink} />
         <span className="link-error form__error form__error_place_bottom"></span>
      </PopupWithForm>
   )
}

export default AddPlacePopup;