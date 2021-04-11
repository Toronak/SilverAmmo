import React from 'react';
import './sertification.scss';
import Sertifikat from '../../images/desktop/sertifikat.png';

function Section3() {
  return (
    <section className='section3' id='certification'>
      <div className='section3__container'>
        <h2 className='section3__title'>certification</h2>
        <div className='section3__img-box'>
          <img className='section3__img' src={Sertifikat} alt="sertifikat" />
          <img className='section3__img' src={Sertifikat} alt="sertifikat" />
          <img className='section3__img' src={Sertifikat} alt="sertifikat" />
        </div>
      </div>
    </section>
  )
}

export default Section3;