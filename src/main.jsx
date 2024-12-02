import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { store } from './redux/store'; 
import './i18n'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root')); 

root.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>
);