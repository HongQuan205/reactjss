
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import {history} from './util/history'
import {Provider} from 'react-redux'
import store from './redux/configStore'
ReactDOM.render(
  <BrowserRouter basename='/movie' history = {history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
,
  document.getElementById('root')
)

reportWebVitals();
