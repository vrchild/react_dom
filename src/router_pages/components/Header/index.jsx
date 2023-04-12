import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component {
    forward = ()=> {
        // 一般组件没有history属性，借助withRouter
        this.props.history.goForward()
    }
    back = ()=> {
        this.props.history.goBack()
    }
    go = ()=> {
        this.props.history.go(2)
    }
    render() {
        console.log('header的props', this.props)
        return (
            <div>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.back}>后退</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default withRouter(Header);
