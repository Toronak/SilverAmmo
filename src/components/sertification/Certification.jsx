import React from 'react';
import './sertification.scss';
import Sertifikat from '../../images/desktop/sertifikat.png';

function Section3() {
  return (
    <section className='section3' id='certification'>
      <div className='section3__container'>
        <div className="section3__title-box">
        <h2 className='section3__title'>certification</h2>
        {/* <div className='section3__arrow'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.682 472.682" fill="rgb(117, 102, 69)" width="150" height="150">
          <polygon  points="235.272,417.072 36.36,256.66 8.555,290.881 235.272,472.682 464.127,290.881 438.461,256.66" />
          <polygon  points="464.127,34.221 438.461,0 235.272,160.412 36.36,0 8.555,34.221 235.272,216.022" />
          <polygon  points="235.272,288.742 36.36,128.33 8.555,162.551 235.272,344.352 464.127,162.551 438.461,128.33" />
        </svg>
      </div> */}
        </div>
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