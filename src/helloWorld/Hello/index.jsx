import React, { Component } from 'react'
import hello from './index.module.css'

export default class index extends Component {
  render() {
    return (
      <div className={hello.title}>Helo</div>
    )
  }
}
