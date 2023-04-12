import React, {Component} from 'react';

class Home extends Component {
    render() {
        console.log('home的props', this.props)
        return (
            <div>我是Home组件</div>
        );
    }
}

export default Home;
