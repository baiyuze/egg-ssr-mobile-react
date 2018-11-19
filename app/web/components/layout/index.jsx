import React, { Component } from 'react'
import Layout from 'common/layout.jsx';
import { Button } from 'antd-mobile';
class LayoutContent extends Component {

  render() {
    console.log(this.props.url,'=============')
    return (
      <Layout>
        <div className='layout-content'>
          <Button style={{color: 'red'}}>我是测试颜色</Button>
          <div>
            {this.props.children}
          </div>
        </div>
      </Layout>
    )
  }
}

export default LayoutContent;