import React, {Component} from 'react';

class DemoSetState extends Component {
  state = {count: 0}
  increment = () => {
    // -------对象式的setState
    // const {count} = this.state
    // this.setState({count: count + 1}, () => {
    //   // count计算后，且页面渲染更新后触发
    //   console.log(this.state.count)
    // })
    // // count计算前的值，因为setState内部是异步的
    // console.log(this.state.count)

    // --------函数式的setState
    this.setState((state, props) => {
      return {count: state.count + 1}
    }, () => {
    })
  }
  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default DemoSetState;
