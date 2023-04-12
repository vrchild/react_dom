import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  selectedALL = (event) => {
    this.props.selectedAllList(event.target.checked)
  }
  deleteAll = () => {
      this.props.deleteAllList()
  }
  render() {
    const {list} = this.props
    const isDid = list.reduce((pre, item) => pre + (item.isDid ? 1 : 0),0)
    return (
      <div>
        <div>
          <input type="checkBox" checked={isDid === list.length} onChange={this.selectedALL} />
          <span className='numShow'>已完成{isDid}个/共{list.length}个</span>
        </div>
        <div>
          <button onClick={this.deleteAll}>删除已完成</button>
        </div>
      </div>
    )
  }
}
