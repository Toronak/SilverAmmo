import React from 'react';
import './catalog.scss';
import Card from '../card/Card';
import imgCard1 from '../../images/desktop/img-card1.jpg';
import imgCard2 from '../../images/desktop/img-card2.jpg';
import imgCard3 from '../../images/desktop/img-card3.jpg';
import imgCard4 from '../../images/desktop/img-card4.jpg';

function Section1() {
  const cardArr = [
    {id: 1, cardImg: imgCard1, description: 'Bullet1', link: '1'},
    {id: 2, cardImg: imgCard2, description: 'Bullet2', link: '2'},
    {id: 3, cardImg: imgCard3, description: 'Bullet3', link: '3'},
    {id: 4, cardImg: imgCard4, description: 'Bullet4', link: '4'},
  ]
  return (
    <section className='section1' id='ammo'>
      <div className='section1__container'>
        <h2 className='section1__title'>products</h2>
        <div className='section1__main-box'>
        {cardArr.map(card => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </section>
  )
}

export default Section1;