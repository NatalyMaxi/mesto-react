import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
  return (
    <div>

      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
          <ImagePopup />

          <PopupWithForm
            popup="edit"
            name="subscribeForm"
            title="Редактировать профиль"
          >
            <input id="name" minLength="2" maxLength="40" required type="text" className="form__item" name="username" />
            <span className="name-error form__error form__error_place_top"></span>
            <input id="info" minLength="2" maxLength="200" required type="text" className="form__item" name="job" />
            <span className="info-error form__error  form__error_place_bottom"></span>
            <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
          </PopupWithForm>

          <PopupWithForm
            popup="add"
            name="add-images"
            title="Новое место"
          >
            <input id="region" minLength="2" maxLength="30" required type="text" placeholder="Название"
              className="form__item" name="name" />

            <span className="region-error form__error form__error_place_top"></span>
            <input id="link" required type="url" placeholder="Ссылка на картинку" className="form__item" name="link" />
            <span className="link-error form__error form__error_place_bottom"></span>
            <button className="form__button" type="submit" aria-label="Создать" disabled>Создать</button>
          </PopupWithForm>

          <PopupWithForm className="popup popup_type_edit-avatar"
            popup="edit-avatar"
            name="edit-avatar"
            title="Обновить аватар"
          >
            <input id="avatar" required type="url" placeholder="Ссылка на аватар" className="form__item" name="avatar" />
            <span className="avatar-error form__error form__error_place_top"></span>
            <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
          </PopupWithForm>

          <div className="popup popup_type_delete-card">
            <div className="popup__content">
              <button className="popup__close" type="button"></button>
              <h3 className="popup__title">Вы уверены?</h3>
              <form className="form" name="delete-card" noValidate>
                <button className="form__button" type="submit" aria-label="Да">Да</button>
              </form>
            </div>
          </div>
          <template className="template">
            <li className="list__items">
              <img src="#" alt="#" className="list__image" />
              <div className="list__item">
                <h2 className="list__title"></h2>
                <div className="list__like-container">
                  <button className="list__toggle" type="button" aria-label="Отметить"></button>
                  <span className="list__like-counter">0</span>
                </div>
                <button className="list__btn" type="button" aria-label="Удалить"></button>
              </div>
            </li>
          </template>
        </div>
      </div>
    </div>
  );
}

export default App;
