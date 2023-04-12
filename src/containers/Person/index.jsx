import React, {Component} from 'react';
import {connect} from "react-redux";
import {nanoid} from "nanoid";
import { Button } from 'antd';
import {addPerson} from "../../redux/actions/person";

class Person extends Component {
  addPersion = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    console.log(personObj)
    this.props.add(personObj)
  }
  render() {
    return (
      <div>
        <h1>我是Persion组件, 上方求和为：{this.props.count}</h1>
        <input ref={c => this.nameNode = c} placeholder="name" />
        <input ref={c => this.ageNode = c} placeholder="age" />
        <Button onClick={this.addPersion}>添加</Button>
        <ul>
          {
            this.props.personData.map(item => {
              return <li key={item.id}>name: {item.name} --- age: {item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({personData: state.person, count: state.count}), // 映射状态
  {
    add: addPerson
  }
)(Person)
