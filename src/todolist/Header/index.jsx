import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  inputList = (event) => {
    if (event.keyCode !== 13) return
    if (event.target.value.trim() === '') return alert('输入不能为空')
    const listObj = {
      id: nanoid(),
      name: event.target.value.trim(),
      isDid: false
    }
    this.props.addList(listObj)
    event.target.value = ''
  }
  render() {
    return (
      <div>
        <input onKeyUp={this.inputList} className='inputText' type="text" placeholder='艹，自己输入' />
      </div>
    )
  }
}
