import React, { Component } from 'react'

export default class test extends Component {
  render() {
    return (
      <div>
        我是测试异步加载
        {this.props.children}
      </div>
    )
  }
}
