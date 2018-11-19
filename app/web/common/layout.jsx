import React, { Component } from 'react';
import './index.less';
export default class Layout extends Component {
  constructor() {
    super();
  }
  render() {
    if(EASY_ENV_IS_NODE) {
      return <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8"></meta>
          <meta name="keywords" content={this.props.keywords}></meta>
          <meta name="description" content={this.props.description}></meta>
          <script src="https://gw.alipayobjects.com/os/rmsportal/uDTmsEBmTUVrpmCBozbm.js"></script>
          {/* <script src="/public/js/layout.js"></script> */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        </head>
        <body>
          <div id="app">
            <div>
              {this.props.children}
            </div>
          </div></body>
      </html>;
    }
    return <div id="app">{this.props.children}</div>;
  }
}
