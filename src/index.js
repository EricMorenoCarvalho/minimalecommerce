import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
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
