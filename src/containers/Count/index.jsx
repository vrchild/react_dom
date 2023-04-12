import React, {Component} from 'react';
import {connect} from "react-redux";
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from "../../redux/actions/count";
import { Select, Button } from 'antd';
const { Option } = Select;

// UI组件
class Count extends Component {
  state = {selectedData: 1}
  handleChange = (value) => {
    this.setState({selectedData: value})
  };
  increment = () => {
    const {selectedData} = this.state
    this.props.jia(selectedData*1)
  }
  decrement = () => {
    const {selectedData} = this.state
    this.props.jian(selectedData*1)
  }
  incrementIfOdd = () => {
    const {selectedData} = this.state
    if (this.props.count % 2 !== 0) {
      this.props.jia(selectedData*1)
    }
  }
  incrementAsync = () => {
    const {selectedData} = this.state
    this.props.jiaAsync(selectedData*1, 500)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>当前组件为count组件: 下方总人数：{this.props.personNum}</h1>
        <h3>当前计算求和为： {this.props.count}</h3>
        <Select
          defaultValue="1"
          style={{ width: 120}}
          onChange={this.handleChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <Button onClick={this.increment}>increment</Button>
        <Button onClick={this.decrement}>decrement</Button>
        <Button onClick={this.incrementIfOdd}>incrementIfOdd</Button>
        <Button onClick={this.incrementAsync}>incrementAsync</Button>
      </div>
    );
  }
}

// 容器组件
export default connect(
  state => ({count: state.count, personNum: state.person.length}),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  })(Count)

// export default Count;
