import React from 'react';
import './scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Pages from './components/MainPages/Pages';

function App() {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
