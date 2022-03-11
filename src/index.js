import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <FooterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

