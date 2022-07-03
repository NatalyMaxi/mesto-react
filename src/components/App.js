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
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm
          popup="edit"
          name="subscribeForm"
          title="Редактировать профиль"
          text="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="name" minLength="2" maxLength="40" required type="text" className="form__item" name="username" placeholder="Имя" />
          <span className="name-error form__error form__error_place_top"></span>
          <input id="info" minLength="2" maxLength="200" required type="text" className="form__item" name="job" placeholder="О себе" />
          <span className="info-error form__error  form__error_place_bottom"></span>
        </PopupWithForm>

        <PopupWithForm className="popup popup_type_edit-avatar"
          popup="edit-avatar"
          name="edit-avatar"
          title="Обновить аватар"
          text="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input id="avatar" required type="url" placeholder="Ссылка на аватар" className="form__item" name="avatar" />
          <span className="avatar-error form__error form__error_place_top"></span>
        </PopupWithForm>

        <PopupWithForm
          popup="add"
          name="add-images"
          title="Новое место"
          text="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="region" minLength="2" maxLength="30" required type="text" placeholder="Название"
            className="form__item" name="name" />

          <span className="region-error form__error form__error_place_top"></span>
          <input id="link" required type="url" placeholder="Ссылка на картинку" className="form__item" name="link" />
          <span className="link-error form__error form__error_place_bottom"></span>
        </PopupWithForm>

        <PopupWithForm className="popup popup_type_delete-card"
          popup="delete-card"
          name="delete-card"
          title="Вы уверены?"
          text="Да"
          onClose={closeAllPopups}
        >
        </PopupWithForm>

      </div>
    </div>
  );
}

export default App;
