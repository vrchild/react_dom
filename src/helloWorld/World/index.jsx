import React, { Component } from 'react'
import world from './index.module.css'

export default class World extends Component {
  render() {
    return (
      <div className={world.title}>World</div>
    )
  }
}
