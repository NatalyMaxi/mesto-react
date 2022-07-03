function Card(props) {
   return (
      <li className="list__items">
         <img src={props.link} alt={props.name} className="list__image" />
         <div className="list__item">
            <h2 className="list__title">{props.name}</h2>
            <div className="list__like-container">
               <button className="list__toggle" type="button" aria-label="Отметить"></button>
               <span className="list__like-counter">0</span>
            </div>
            <button className="list__btn" type="button" aria-label="Удалить"></button>
         </div>
      </li> 
   )
}

export default Card;