import React from "react";
import api from '../utils/Api.js';
import Card from "./Card.js";

function Main(props) {

   const [userName, setUserName] = React.useState('');
   const [userDescription, setUserDescription] = React.useState('');
   const [userAvatar, setUserAvatar] = React.useState('');

   React.useEffect(() => {
      api.getUserInfo()
         .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   })

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__container-avatar">
               <button className="profile__btn-avatar" onClick={props.onEditAvatar}></button>
               <img className="profile__image" src={userAvatar} alt="Аватар" />
            </div>
            <div className="profile__info">
               <h1 className="profile__title">{userName}</h1>
               <button className="profile__btn" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
               <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
         </section>
         <section className="pictures">
            <ul className="list">
            </ul>
         </section>
      </main>
   ) 
}

export default Main;