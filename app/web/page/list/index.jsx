import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import List from 'components/list';
import './index.less';


export default class ListIndex extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props,'-----')
  }

  render() {
    return (
      <span className="main">
        <Button type='primary'>按钮</Button>
        <List></List>
      </span> 
    )
  }
}