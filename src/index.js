import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import './style.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import reducers from './reducers';

import App from './components/app';

// require('dotenv').config();

// dotenv.config({
//   silent: true,
// });

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const firebaseConfig = {
  apiKey: 'AIzaSyB4f2Dh8xQX5t5sRdPRGW_4rVDQfjbFpog',
  authDomain: 'strikethru-20e98.firebaseapp.com',
  projectId: 'strikethru-20e98',
  storageBucket: 'strikethru-20e98.appspot.com',
  messagingSenderId: '864511055059',
  appId: '1:864511055059:web:35f4091df4b38a9c687026',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
