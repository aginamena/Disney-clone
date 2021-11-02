import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Detail from "./components/Detail"
import Login from './components/Login';
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
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/detail">
            <Detail
              src="https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            />
          </Route>
        </Switch>
        <p>Created by Mena Agina </p>
      </div>
    </Router>
  );
}

export default App;
