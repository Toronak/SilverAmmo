import React from 'react';
import './header.scss';
import shtamp from '../../images/desktop/shtamp.png';


function Header() {
  return (
    <header className='header'>
      <div className='header__img-box'>
        <img src={shtamp} alt="shtamp" />
      </div>
      <nav className='header__navbar'>
        <a className='header__navbar-item'>главная</a>
        <a className='header__navbar-item'>патроны</a>
        <a className='header__navbar-item'>доставка</a>
        <a className='header__navbar-item'>контакты</a>
      </nav>
      <div className='header__main-box'>
        <div className='header__title-box'>
          <div className='header__stars'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 426.667 426.667" fill="rgba(255, 235, 205, 0.829)">
              <polygon fill="rgba(207,166,115,0.87718837535014)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	      81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 426.667 426.667" fill="rgba(255, 235, 205, 0.829)">
              <polygon fill="rgba(207,166,115,0.87718837535014)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	      81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              viewBox="0 0 426.667 426.667" fill="rgba(255, 235, 205, 0.829)">
              <polygon fill="rgba(207,166,115,0.87718837535014)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	      81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
            </svg>
          </div>
          <h1 className='header__title'>silver ammo</h1>
          <p className='header__sub-title'>we made,you shoot</p>
        </div>
      </div>
      <div className='header__arrow'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 472.682 472.682" fill="rgba(207,166,115,0.87718837535014)" width="30" height="30">
              <polygon points="235.272,417.072 36.36,256.66 8.555,290.881 235.272,472.682 464.127,290.881 438.461,256.66" />
              <polygon points="464.127,34.221 438.461,0 235.272,160.412 36.36,0 8.555,34.221 235.272,216.022" />
              <polygon points="235.272,288.742 36.36,128.33 8.555,162.551 235.272,344.352 464.127,162.551 438.461,128.33" />
            </svg>
          </div>
    </header>
  )
}

export default Header;