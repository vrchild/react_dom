import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Items from '../Items'
import './index.css'

export default class List extends Component {
  // 传值类型限定
  static propTypes = {
    changeStatusApp: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
  }
  changeStatusList = (val, status) => {
    this.props.changeStatusApp(val, status)
  }
  deleteId = (id) => {
    this.props.deleteIdList(id)
  }
  render() {
    const {list} = this.props
    return (
      <div className='box'>
        {
          list.map(item => {
            return <Items deleteId={this.deleteId} changeStatusList={this.changeStatusList} key={item.id} itemMessage={item} />
          })
        }
      </div>
    )
  }
}
