function handleEditProfileClick() {
   document.querySelector('.popup_type_edit').classList.add('popup_is-active');
}

function handleAddPlaceClick() {
   document.querySelector('.popup_type_add').classList.add('popup_is-active');
}

function handleEditAvatarClick() {
   document.querySelector('.popup_type_edit-avatar').classList.add('popup_is-active');
}



function Main() {
   return (
      <main className="content">
         <section className="profile">
            <div className="profile__container-avatar">
               <button className="profile__btn-avatar"></button>
               <img className="profile__image" src="#" alt="Аватар" />
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
   ) 
}

export default Main;