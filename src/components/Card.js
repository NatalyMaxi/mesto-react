function Card(props) {

   function handleClick() {
      props.onCardClick(props.card);
   }
   
   return (
      <li className="list__items">
         <img src={props.card.link} alt={props.card.name} className="list__image" onClick={handleClick} />
         <div className="list__item">
            <h2 className="list__title">{props.card.name}</h2>
            <div className="list__like-container">
               <button className="list__toggle" type="button" aria-label="Отметить"></button>
               <span className="list__like-counter">{props.card.likes.length}</span>
            </div>
            <button className="list__btn" type="button" aria-label="Удалить"></button>
         </div>
      </li> 
   )
}

export default Card;