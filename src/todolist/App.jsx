import React, { Component } from "react";
import Header from './todolist/Header';
import List from './todolist/List';
import Footer from './todolist/Footer';
import './index.css'

class App extends Component {
  state = {list: []}
  // 接收header新增的数据
  addList = (val) => {
    const newList = [val, ...this.state.list]
    this.setState({list: newList})
  }
  // 复选框选中/取消
  changeStatusApp = (id, status) => {
    const newList = this.state.list.map(item => {
      if (item.id === id) return {...item, isDid:status}
      else return item
    })
    this.setState({list: newList})
  }
  deleteIdList = (id) => {
    const arr = this.state.list.filter(item => {
      return item.id !== id
    })
    this.setState({list: arr})
  }
  selectedAllList = (isDid) => {
    const {list} = this.state
    const todolist = list.map(item => {
      return {...item,isDid: isDid}
    })
    this.setState({list:todolist})
  }
  deleteAllList = () => {
    const {list} = this.state
    const todolist = list.filter(item => {
      return !item.isDid
    })
    this.setState({list:todolist})
  }

  render() {
    const {list} = this.state
    return (
      <div className="main">
        <Header addList={this.addList} />
        <List deleteIdList={this.deleteIdList} changeStatusApp={this.changeStatusApp} list={list} />
        <Footer selectedAllList={this.selectedAllList} deleteAllList={this.deleteAllList} list={list} />
      </div>
    )
  }
}

export default App;
