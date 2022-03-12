import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CarouselComponent from './components/CarouselComponent'

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
      <CarouselComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

