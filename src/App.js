import logo from './Logoku.png';
import Home from './Home/Home';
import Traveling1 from './Traveling1/Traveling1'
import Traveling2 from './Traveling2/Traveling2'
import Traveling3 from './Traveling3/Traveling3'
import AboutMe from './AboutMe/AboutMe'
import { Component, Fragment } from 'react';
import './App.css';
import React from "react";
import {
  // BrowserRouter ,
  // as Router,
  // Switch,
  Route,
  Link,
  BrowserRouter, 
  
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <header className="App-header"><u>TJ HISTORY</u>
      <img src={logo} className="App-logo" alt="logo" />
      
      
      {/* <Greeting/> */}
      </header>
      <header className = "listHeader">
      <Fragment>
      <ul>
        <li> <strong> <Link to="/home" >Home</Link> </strong></li>
        <li> <strong> <Link to="/traveling1" >Traveling 1</Link> </strong></li>
        <li> <strong> <Link to="/traveling2" >Traveling 2</Link> </strong></li>
        <li> <strong> <Link to="/traveling3" >Traveling 3</Link> </strong></li>
        <li> <strong> <Link to="/aboutme" >About Me</Link> </strong></li>
        
      
      
      <Route path="/home" component={Home}/>
      <Route path="/traveling1" component={Traveling1} />
      <Route path="/traveling2" component={Traveling2} />
      <Route path="/traveling3" component={Traveling3} />
      <Route path="/aboutme" component={AboutMe} />
      
      </ul>
       </Fragment>
      </header>
      <body className = "Body">
      </body>

      
      </div>

      
      </BrowserRouter>

    );
  
  }
}

export default App;
