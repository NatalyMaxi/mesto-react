import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    
      <div className="page">
        <div className="page__container">
          <header className="header">
            <img className="logo" src="<%=require('./images/logo.svg')%>" alt="Логотип" />
          </header>
          <main className="content">
            <section className="profile">
              <div className="profile__container-avatar">
                <button className="profile__btn-avatar"></button>
                <img className="profile__image" src="<%=require('./images/image.jpg')%>" alt="Аватар" />
              </div>
              <div className="profile__info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="profile__btn" type="button" aria-label="Редактировать"></button>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
              <button className="profile__button" type="button" aria-label="Добавить"></button>
            </section>
            <section className="pictures">
              <ul className="list">
              </ul>
            </section>
          </main>
          <footer className="footer">
            <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
          </footer>
          <div className="popup popup_type_edit">
            <div className="popup__content">
              <button className="popup__close" type="button"></button>
              <h3 className="popup__title">Редактировать профиль</h3>
              <form className="form" name="subscribeForm">

                <input id="name" minlength="2" maxlength="40" required type="text" className="form__item" name="username" />

                <span className="name-error form__error form__error_place_top"></span>

                <input id="info" minlength="2" maxlength="200" required type="text" className="form__item" name="job" />

                <span className="info-error form__error  form__error_place_bottom"></span>

                <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_image">
            <div className="popup__pictures-container">
              <button className="popup__close" type="button"></button>
              <figure className="popup__figure">
                <img className="popup__img" src="#" alt="#" />
                <figcaption className="popup__caption"></figcaption>
              </figure>
            </div>
          </div>
          <div className="popup popup_type_add">
            <div className="popup__content">
              <button className="popup__close" type="button"></button>
              <h3 className="popup__title">Новое место</h3>
              <form className="form" name="add-images" novalidate>

                <input id="region" minlength="2" maxlength="30" required type="text" placeholder="Название"
                  className="form__item" name="name" />

                <span className="region-error form__error form__error_place_top"></span>

                <input id="link" required type="url" placeholder="Ссылка на картинку" className="form__item" name="link" />

                <span className="link-error form__error form__error_place_bottom"></span>

                <button className="form__button" type="submit" aria-label="Создать" disabled>Создать</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_edit-avatar">
            <div className="popup__content">
              <button className="popup__close" type="button"></button>
              <h3 className="popup__title">Обновить аватар</h3>
              <form className="form" name="edit-avatar" novalidate>
                <input id="avatar" required type="url" placeholder="Ссылка на аватар" className="form__item" name="avatar" />
                <span className="avatar-error form__error form__error_place_top"></span>
                <button className="form__button" type="submit" aria-label="Сохранить">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_delete-card">
            <div className="popup__content">
              <button className="popup__close" type="button"></button>
              <h3 className="popup__title">Вы уверены?</h3>
              <form className="form" name="delete-card" novalidate>
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
