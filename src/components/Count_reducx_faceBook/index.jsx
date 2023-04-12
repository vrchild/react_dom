import React, {Component} from 'react';
// 引入store，用于获取reducer中ba保存对象
import store from '../../redux/store'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from "../../redux/actions/count";
import { Select, Button } from 'antd';
const { Option } = Select;

class Count extends Component {
  state = {selectedData: 1}
  handleChange = (value) => {
    this.setState({selectedData: value})
  };
  increment = () => {
    const {selectedData} = this.state
    store.dispatch(createIncrementAction(selectedData))
  }
  decrement = () => {
    const {selectedData} = this.state
    store.dispatch(createDecrementAction(selectedData))
  }
  incrementIfOdd = () => {
    const {selectedData} = this.state
    const data = store.getState()
    if (data % 2 !== 0) {
      store.dispatch(createIncrementAction(selectedData))
    }
  }
  incrementAsync = () => {
    const {selectedData} = this.state
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(selectedData, 500))
    // }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前计算求和为： {store.getState()}</h1>
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

export default Count;
