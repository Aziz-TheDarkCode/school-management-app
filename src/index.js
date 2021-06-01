import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/css/main.css'
import './styles/css/plugin/bootstrap-4-utilities.min.css'
import './styles/css/plugin/bootstrap-grid.min.css'

ReactDOM.render(
   <App /> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
