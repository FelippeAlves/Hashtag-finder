import React from 'react';
import ReactDOM from 'react-dom';
import About from './pages/About/About'
import HomePage from './pages/HomePage/HomePage';
import { 
  BrowserRouter as Router,
  Route,
  Routes, 
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/sobre" exact element={<About />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

