import React, { useEffect } from 'react';
import './navbar.scss';

function NavBar() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    // --- ACTIVE CLASS ---
    // let navItem = document.getElementsByClassName('navbar-item');
    // let activeClass = document.getElementsByClassName('active');
    // for ( let i = 0; navItem.length > i; i++) {
    //   navItem[i].onclick = function() {
    //     let currentActive = activeClass[0];
    //     if (currentActive)
    //       currentActive.classList.remove("active");
    //     if (currentActive !== this)
    //       this.classList.add("active");
    //   };
    // }
  }, []);
  return (
    <nav className='navbar'>
      <div className='navbar__box'>
        <a className='navbar-item' href="/"
          onClick={e => {
            let hero = document.getElementById("home");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("home", "home", "/home");
          }}>shop</a>
        <a className='navbar-item' href="/"
          onClick={e => {
            let hero = document.getElementById("ammo");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("ammo", "ammo", "/ammo");
          }}>blog</a>
        <a className='navbar-item' href="/"
          onClick={e => {
            let hero = document.getElementById("delivery");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("delivery", "delivery", "/delivery");
          }}>products</a>
        <a className='navbar-item' href="/"
          onClick={e => {
            let hero = document.getElementById("certification");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("certification", "certification", "/certification");
          }}>description</a>
        <a className='navbar-item' href="/"
          onClick={e => {
            let hero = document.getElementById("contacts");
            e.preventDefault();
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState("contacts", "contacts", "/contacts");
          }}>contacts</a>  
      </div>
    </nav>
  )
}
export default NavBar;