import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CarouselComponent from './components/CarouselComponent'
import PostComponent from './components/PostComponent'


ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
      <PostComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

