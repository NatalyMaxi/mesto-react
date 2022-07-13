import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick }) {

   const currentUserContext = React.useContext(CurrentUserContext);

   function handleClick() {
      onCardClick(card);
   }

   // Определяем, являемся ли мы владельцем текущей карточки
   const isOwn = card.owner._id === currentUserContext._id;

   // Создаём переменную, которую после зададим в `className` для кнопки удаления
   const cardDeleteButtonClassName = (
      `list__btn ${isOwn ? 'list__btn_visible' : 'list__btn_hidden'}`
   ); 

   // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
   const isLiked = card.likes.some(i => i._id === currentUserContext._id);

   // Создаём переменную, которую после зададим в `className` для кнопки лайка
   const cardLikeButtonClassName = `...`; 

   return (
      <li className="list__items">
         <img src={card.link} alt={card.name} className="list__image" onClick={handleClick} />
         <div className="list__item">
            <h2 className="list__title">{card.name}</h2>
            <div className="list__like-container">
               <button className={cardLikeButtonClassName} type="button" aria-label="Отметить"></button>
               <span className="list__like-counter">{card.likes.length}</span>
            </div>
            <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить"></button>
         </div>
      </li>
   )
}

export default Card;