import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Detail from "./components/Detail"
import Login from './components/Login';
import test from './components/test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: "url(./images/home-background.png)" }}>
        {/* <Header /> */}
        <test />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/detail/:identifier">
            <Detail
            />
          </Route>
        </Switch>
        <p id="author">Created by Mena Agina </p>
      </div>
    </Router>
  );
}

export default App;
