import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct root mounting for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
