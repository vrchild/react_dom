import React, { Component } from 'react'
import './index.css'

export default class Items extends Component {
  state = {mouse: false}
  moveOn = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }
  // 选中状态
  changeStatus = (id) => {
    return (event) => {
      this.props.changeStatusList(id,event.target.checked)
  }
}
  // 删除
  delete = (ids) => {
    return () => {
      this.props.deleteId(ids)
    }
  }
  render() {
    const {itemMessage} = this.props
    const {mouse} = this.state
    return (
      <div onMouseEnter={this.moveOn(true)} onMouseLeave={this.moveOn(false)}>
        <div className='listBox'>
          <input onChange={this.changeStatus(itemMessage.id)} className='checkBtn' type="checkBox" checked={itemMessage.isDid}/>
          <span className='lists'>{itemMessage.name}</span>
          <button onClick={this.delete(itemMessage.id)} style={{float: 'right',display:mouse? 'inline-block':'none'}}>删除</button>
        </div>
      </div>
    )
  }
}
