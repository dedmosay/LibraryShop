import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { Provider } from 'react-redux';

import App from './App';

import createStore from './store';
const store = createStore()

// Тестовое добавление и изменени reducers, можно использовать как пример
/*
setTimeout(function() {
  store.dispatch({
    type: "SET_BOOKS",
    payload: [
      {
        id: 0,
        title: 'New Books'
      }
    ]
  })
}, 3000)
*/


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

