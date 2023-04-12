import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./router_pages/About"; // 路由组件
import Home from "./router_pages/Home";
import Header from "./router_pages/components/Header";// 一般组件
import MyVavLink from "./components/MyNavLink";
// import './index.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header a={1} />
        <div className='contain'>
          <div className='siderBar'>
            <MyVavLink to='/home'>Home</MyVavLink>
            <MyVavLink to='/about'>About</MyVavLink>
          </div>
          {/*默认模糊匹配开启*/}
          <div className='content'>
            <Switch>
              {/*开启精准匹配 exact={true}*/}
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Redirect to='/home' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
