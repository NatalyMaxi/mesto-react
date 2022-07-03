import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  return (
    <div>

      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
          />
          <Footer />
          <ImagePopup />

          <PopupWithForm
            popup="edit"
            name="subscribeForm"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <input id="name" minLength="2" maxLength="40" required type="text" className="form__item" name="username" />
            <span className="name-error form__error form__error_place_top"></span>
            <input id="info" minLength="2" maxLength="200" required type="text" className="form__item" name="job" />
            <span className="info-error form__error  form__error_place_bottom"></span>
            <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
          </PopupWithForm>

          <PopupWithForm className="popup popup_type_edit-avatar"
            popup="edit-avatar"
            name="edit-avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input id="avatar" required type="url" placeholder="Ссылка на аватар" className="form__item" name="avatar" />
            <span className="avatar-error form__error form__error_place_top"></span>
            <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
          </PopupWithForm>

          <PopupWithForm
            popup="add"
            name="add-images"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input id="region" minLength="2" maxLength="30" required type="text" placeholder="Название"
              className="form__item" name="name" />

            <span className="region-error form__error form__error_place_top"></span>
            <input id="link" required type="url" placeholder="Ссылка на картинку" className="form__item" name="link" />
            <span className="link-error form__error form__error_place_bottom"></span>
            <button className="form__button" type="submit" aria-label="Создать" disabled>Создать</button>
          </PopupWithForm>

          <PopupWithForm className="popup popup_type_delete-card"
            popup="delete-card"
            name="delete-card"
            title="Вы уверены?"
            onClose={closeAllPopups}
          >
            <button className="form__button" type="submit" aria-label="Да">Да</button>
          </PopupWithForm>

        </div>
      </div>
    </div>
  );
}

export default App;
