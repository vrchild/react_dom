import React, { Component } from "react";
import DemoSetState from "./components_kuozhan/1_setState";
import DemoLazy from "./components_kuozhan/2_lazyLoad";
import DemoUseState from "./components_kuozhan/3_hooks/1_index_useState";
import DemoUseEffect from "./components_kuozhan/3_hooks/2_index_useEffect_useRef_Fragment";
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="main">
        <DemoSetState a='jack' /><hr/>
        <DemoLazy />
        <DemoUseState a='jack' /><hr/>
        <DemoUseEffect />
      </div>
    )
  }
}

export default App;
