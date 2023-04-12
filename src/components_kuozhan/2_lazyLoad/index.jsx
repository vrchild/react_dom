import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "../../router_pages/components/Header";
import MyVavLink from "../../components/MyNavLink";
// import Home from "../../router_pages/Home";
// import About from "../../router_pages/About";

const Home = lazy(() => import('../../router_pages/Home'))
const About = lazy(() => import('../../router_pages/About'))

class DemoLazy extends Component {
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
              <Suspense fallback={<h1>loading....</h1>}>
                {/*开启精准匹配 exact={true}*/}
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
              </Suspense>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoLazy;
