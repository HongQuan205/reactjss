import { BrowserRouter as Router, NavLink, Routes, Route, Switch, useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Component } from 'react';
import './App.css';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import {UserTemlate} from './template/UserTemplate/UserTemplate'
import Login from './pages/Login/Login';

export const history = createBrowserHistory();
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_HISTORY', history: history })
  }, [])
  return (
    <div>
      <Router history= {history}>
        <Switch>
          <HomeTemplate path ="/home"  Component={Login}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
