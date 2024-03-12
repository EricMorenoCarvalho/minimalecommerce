import React from 'react';
import reportWebVitals from './reportWebVitals';
import '@fontsource/ubuntu';
import './components/general.css';
import App from './App';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
