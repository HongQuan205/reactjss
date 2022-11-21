
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/configStore'
ReactDOM.render(
    <Provider store={store}>
     <div>Quan DH</div>
    </Provider>
,
  document.getElementById('root')
)

reportWebVitals();
