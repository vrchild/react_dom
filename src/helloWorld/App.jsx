import React, { Component } from "react";
import './index.css'
import World from "./World";
import Hello from './Hello'

// function App() {
//   return (
//     <div className="main">
//       {/* <Hello /> */}
//       {/* <World /> */}
//     </div>
//   );
// }

class App extends Component {

  render() {
    return (
      <div className="main">
         <Hello />
         <World />
      </div>
    )
  }
}

export default App;
