// @flow
import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import { AuthContext } from './context/auth';
import LoggedIn from './LoggedIn'
import Game from './components/Game'
import Login from './components/User/Login'
import Signup from './components/User/Signup'
import Admin from './components/Admin'
import './App.scss';

function App(props) {
  const existingTokens = localStorage.getItem("tokens");
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    // REF: Add tokens
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Game</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
        <div className="App">
          <Route exact path="/" component={Game}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <LoggedIn path="/admin" component={Admin}/>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
