import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import {UserTemplate} from './template/UserTemplate/UserTemplate'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

export const history = createBrowserHistory();
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_HISTORY', history: history })
  }, [])
  return (
    <div>
      <BrowserRouter history= {history}>
        <Switch>
          <HomeTemplate path="/home" Component={Home}/>
          <UserTemplate path ="/login"  Component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
