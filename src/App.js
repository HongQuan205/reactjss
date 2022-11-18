import { BrowserRouter as Router, NavLink, Routes, Route, Switch, useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import LoadingCoponent from './GlobalSetting/LoadingComponent/LoadingComponent';
import { UserLoginTemplate } from './template/UserLoginTemplate';
import LoginCyberBugs from './CyberBugs/LoginCyberBugs/LoginCyberBugs';
import Contacts from './pages/Contact/Contacts';
import Abouts from './pages/About/Abouts';
import Home from './pages/Home/Home'
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_HISTORY', history: history })
  }, [])
  return (
    <div>
      <LoadingCoponent/> 
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contacts} />
        <HomeTemplate exact path="/about" Component={Abouts} />
        <UserLoginTemplate exact="/login" Component={LoginCyberBugs}  />
      </Switch>
    </div>
  )
}

export default App;
