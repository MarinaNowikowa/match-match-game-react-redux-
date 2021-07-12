import React from "react"
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './header.css'

import Home from '../pages/Home';
import Congratulation from '../pages/Congratulation';
import Game from "../pages/Game";
import Profile from "../pages/Profile";
import Records from "../pages/Records";
import Welcome from '../pages/Welcome';

export default function Header(){
    return (
     <Router>
        <nav className="content">
          <ul className="menubar">
            <li>
              <Link to="/">
              <div className="header_title">Home</div> 
              </Link>
            </li>
            <li>
            <Link to="/welcome">
              <div className="header_title">Welcome</div>
            </Link>
            </li>
            <li>
            <Link to="/profile">
              <div className="header_title">Profile</div>
            </Link>
            </li>
            <li>
            <Link to="/game">
               <div className="header_title">Game</div>
            </Link>
            </li>
            <li>
              <Link to="/congratulation">
              <div className="header_title">Congratulation</div>
            </Link>
            </li>
            <li>
            <Link to="/records">
              <div className="header_title">Records TOP result</div>
            </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="/welcome"> <Welcome/></Route>
          <Route path="/profile"> <Profile/> </Route>
          <Route path="/game"> <Game/></Route>
          <Route path="/congratulation"> <Congratulation/> </Route>
          <Route path="/records"><Records/> </Route>
          <Route ></Route> 
        </Switch>
      </Router>
    )
}