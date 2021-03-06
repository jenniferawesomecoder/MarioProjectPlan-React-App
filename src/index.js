import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {  reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true})
  )
);


store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
  });
