import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './pages/header.js';
import Home from './pages/home.js';
import '@fontsource/ubuntu';
import './styles/general.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
  </React.StrictMode>
);
reportWebVitals();
