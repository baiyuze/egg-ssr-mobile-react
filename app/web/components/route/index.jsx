import React, { Component } from 'react'

class Route extends Component {

  render() {
    let isShowComponent = false;
    if(this.props.pathName === this.props.path) {
      isShowComponent = true;
    } else {
      isShowComponent = false;
    }
    return isShowComponent ? <this.props.component {...this.props.context} path={this.props.path} params={this.props.params}></this.props.component> : null
  }
}

export default Route;
