import React from 'react';
import './card.scss';

function Card({ description, link, cardImg }){
  return(
    <span className='card__wrapper'>
      <div className='card'>
        <img className='card__img' src={cardImg} alt="ammo"/>
        <p className='card__title'>{description}</p>
        <button className='card__btn' link={link}>see more</button>
      </div>
    </span>
  )
}

export default Card;