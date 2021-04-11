import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Section1 from './components/catalog/Catalog';
import Header from './components/header/Header';
import Section2 from './components/delivery/Delivery';
import Section3 from './components/sertification/Certification';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import SlickSlider from './components/slider/SlickSlider';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Header/>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
