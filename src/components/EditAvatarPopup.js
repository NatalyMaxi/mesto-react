import React from 'react';
import PopupWithForm from './PopupWithForm.js'

function EditAvatarPopup({ isOpen, onClose }) {

   return (
      <PopupWithForm className="popup popup_type_edit-avatar"
         popup="edit-avatar"
         name="edit-avatar"
         title="Обновить аватар"
         text="Сохранить"
         isOpen={isOpen}
         onClose={onClose}
      >
         <input id="avatar" required type="url" placeholder="Ссылка на аватар" className="form__item" name="avatar" />
         <span className="avatar-error form__error form__error_place_top"></span>
      </PopupWithForm>
   )
}

export default EditAvatarPopup;