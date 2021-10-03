import logo from './Logoku.png';
import { Component } from 'react';
import './App.css';

// function Greeting() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello World</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class Traveling1 extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">TJ HISTORY
      <img src={logo} className="App-logo" alt="logo" />
      
      
      {/* <Greeting/> */}
      </header>
      <header className = "listHeader">
      <ul>
        <li><a href="App.js"> <strong> Home </strong> </a></li>
        <li><a href="Traveling1.js"> <strong> Traveling 1 </strong> </a></li>
        <li><a href="Traveling2.js"> <strong> Traveling 2 </strong> </a></li>
        <li><a href="Traveling.js"> <strong> Traveling 3 </strong> </a></li>
        <li><a href="AboutMe.js"> <strong> About Me </strong> </a></li>

      </ul>
      </header>
      <body className = "Body">
      
        <p>Hello World</p>
      
      </body>


      
      
      
      
      
      
      </div>

    );
  
  }
}

export default Traveling1;
