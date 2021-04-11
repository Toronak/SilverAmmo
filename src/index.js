import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './components/store/Store';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode >,
  document.getElementById('root')
);
