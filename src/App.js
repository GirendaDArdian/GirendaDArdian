import logo from './Logoku.png';
// import Home from './Home/Home';
// import Traveling1 from
// import Traveling2 from
// import Traveling3 from
// import AboutMe from
import { Component } from 'react';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <header className="App-header">TJ HISTORY
      <img src={logo} className="App-logo" alt="logo" />
      
      
      {/* <Greeting/> */}
      </header>
      <header className = "listHeader">
      <ul>
        <li> <strong> <Link to="/home" >Home</Link> </strong></li>
        <li> <strong> <Link to="/traveling1" >Traveling 1</Link> </strong></li>
        <li> <strong> <Link to="/traveling2" >Traveling 2</Link> </strong></li>
        <li> <strong> <Link to="/traveling3" >Traveling 3</Link> </strong></li>
        <li> <strong> <Link to="/aboutme" >About Me</Link> </strong></li>
        
      </ul>
      </header>
      <body className = "Body">
      </body>

      
      </div>
      </BrowserRouter>

    );
  
  }
}

export default App;
