import React, { Component } from "react";
// import Count from "./redux/Count_reducx_faceBook"; // faceBook
import Count from './containers/Count/index'
import Person from "./containers/Person";
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Count />
        <hr/>
        <Person />
      </div>
    )
  }
}

export default App;
