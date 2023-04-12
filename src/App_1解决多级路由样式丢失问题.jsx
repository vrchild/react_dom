import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./router_pages/About"; // 路由组件
import Home from "./router_pages/Home";
import Header from "./router_pages/components/Header";// 一般组件
import Test from "./router_pages/components/Test";
import MyVavLink from "./components/MyNavLink";
// import './index.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header a={1} />
        {/*原生HTML中，靠<a>标签跳转不同页面*/}
        {/*<li><a href="./home">Home组件</a></li>
        <li><a href="./about">About组件</a></li>*/}

        {/*在react中，靠路由链接实现切换组件*/}
        {/*编写路由链接*/}
        <div className='contain'>
          <div className='siderBar'>
            {/*/!*<NavLink to='/home'>Home</NavLink>*!/  点击默认添加类名active*/}
            {/*<NavLink activeClassName='txt' to='/home'>Home</NavLink><br/>*/}
            {/*<NavLink activeClassName='txt' to='/about'>About</NavLink>*/}
            <MyVavLink to='/lyf/about'>About</MyVavLink>
            <MyVavLink to='/lyf/home'>Home</MyVavLink>
            {
              /*加上/lyf后会出现样式丢失问题（public/index.html中引入样式）  http://localhost:3000就是public文件夹
              http://localhost:3000/css/index.css
              http://localhost:3000/lyf/css/index.css
              解决方式： <link rel="stylesheet" href="./css/index.css"> 改为
                <link rel="stylesheet" href="/css/index.css">
                <link rel="stylesheet" href="%PUBLIC_URL%/css/index.css">
            */}
          </div>
          {/*注册路由*/}
          <div className='content'>
            <Switch>{/*单一匹配，提高效率*/}
              {/*<Route path='/home' render={(props) => <Home {...props} authed={true} /> } />*/}
              <Route path='/lyf/home' component={Home} />
              <Route path='/lyf/about' component={About} />
              <Route path='/lyf/about' component={Test} />
              {/*一般写在路由的最下方，一切都不匹配后重定向到指定路由*/}
              <Redirect to='/lyf/home' />
              {/*<Route path='about' element={<About />} />*/}
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
