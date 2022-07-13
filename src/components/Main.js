import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

   const [cards, setCards] = React.useState([]);
   const currentUserContext = React.useContext(CurrentUserContext);

   React.useEffect(() => {
      api
         .getInitialCards()
         .then((data) => {
            setCards(data);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }, []);

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__container-avatar">
               <button className="profile__btn-avatar" onClick={onEditAvatar}></button>
               <img className="profile__image" src={currentUserContext.avatar} alt="Аватар" />
            </div>
            <div className="profile__info">
               <h1 className="profile__title">{currentUserContext.name}</h1>
               <button className="profile__btn" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
               <p className="profile__subtitle">{currentUserContext.about}</p>
            </div>
            <button className="profile__button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
         </section>
         <section className="list">
            {cards.map((card) => (
               <Card key={card._id} card={card} onCardClick={onCardClick} />
            ))}
         </section>
      </main>
   )
}

export default Main;