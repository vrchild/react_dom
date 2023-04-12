import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import MyVavLink from "../../components/MyNavLink";
import News from "../components/News";
import Message from "../components/Message";
import './index.css'

class About extends Component {
    render() {
        console.log('about的props', this.props)
        return (
            <div>
              <div className='topBar'>
                <MyVavLink to='/about/news'>News</MyVavLink>
                <MyVavLink to='/about/message'>Message</MyVavLink>
              </div>
              <Switch>
                <Route path='/about/news' component={News} />
                <Route path='/about/message' component={Message} />
              </Switch>
            </div>
        );
    }
}

export default About;
