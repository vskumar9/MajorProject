import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import { GoogleOAuthProvider } from '@react-oauth/google';





const store = createStore( Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<GoogleOAuthProvider clientId={`926543730600-bqcs13mq5rhnjntao9foj9q3e1cr2br1.apps.googleusercontent.com`}>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
</GoogleOAuthProvider>,
  document.getElementById('root')
);
