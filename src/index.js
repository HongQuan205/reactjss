import ReactDOM from 'react-dom';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/configStore'
import './index.css';
ReactDOM.render(
 <Provider store={store}>
    <App/>
 </Provider>
,document.getElementById('root')
)

reportWebVitals();
