'use strict';
import React, { Component } from 'react';
import axios from 'axios';
import loadable from '@loadable/component'
import { Button } from 'antd-mobile';
const OtherComponent = loadable(() => import('./test.jsx'))

import './index.less';
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    }
  }
  componentWillMount() {
    axios.get('/api/article/list').then(function(response){
    }).catch(function (response){
      
    });

  }

  componentDidMount() {

  }

  onClick() {
    this.setState({ isShow: !this.state.isShow });
    location.hash = '#/home';
  }

  render() {
    return <div className="list-content">
      HELLO WORLD!
      <Button type='primary' onClick={this.onClick.bind(this)} className='point'>你好世界</Button>
      {
        this.state.isShow ? <OtherComponent></OtherComponent> : null
      }
      
    </div>
  }
}