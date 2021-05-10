import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'


export default function App () { 
  
  return (
      <Router>
        <Navbar></Navbar>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
