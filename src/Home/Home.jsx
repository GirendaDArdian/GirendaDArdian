
import {
  Component,
  Fragment,

}
  from 'react';
import './Home.css';
import React from "react";
import {
  // BrowserRouter ,
  // as Router,
  // Switch,
  //   Route,
  Link,
  //   BrowserRouter, 

} from "react-router-dom";



class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="Home">
          <body className="body2">
            <body className="bodyhome">

              <header className="header">
                <h1 className="h1">TRAVELING JOURNEY HISTORY</h1>
                <h3 className="h3">Welcome to My Traveling History</h3>

                <li className="button"> <strong> <Link to="/traveling1" ><p className="tombol">Start Your Journey</p></Link> </strong></li>

              </header>

            </body>
          </body>
        </div>
      </Fragment>
    )
  }
}

export default Home;