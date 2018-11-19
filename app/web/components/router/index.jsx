import React, { Component } from 'react'

class Router extends Component {
  constructor() {
    super();
    this.state = { currentPath: '/' };
    this.listenerUrlChange = this.listenerUrlChange.bind(this);
  }

  listenerUrlChange(evt) {
    let newUrl,pathName,hash,params;
    newUrl = evt.newURL;
    pathName = newUrl.split('#')[1];
    hash = pathName.split('?') ? pathName.split('?')[0] : pathName;
    params = pathName.indexOf('?') !== -1 ? this.parseQueryString(pathName) : {};
    this.setState({ currentPath: hash, params });
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange',this.listenerUrlChange,false);
  } 

  parseQueryString(url) {
    var str = url.split("?")[1], items = str.split("&");
    var result = {};
    var arr;
    for (var i = 0; i < items.length; i++) {
      arr = items[i].split("=");
      result[arr[0]] = arr[1];
    }
    return result;
  }

  initHashRouter() {
    
    let hash = '/';
    let params = {};
    if(location.hash.indexOf('#') !== -1) {
      hash = location.hash.split('#')[1];
      params = hash.indexOf('?') !== -1 ? this.parseQueryString(hash) : {};
      hash = hash.split('?')[0];
    };
    this.setState({currentPath: hash, params});
  }

  componentDidMount() {
    this.initHashRouter();
    window.addEventListener('hashchange',this.listenerUrlChange,false)
  }

  render() {

    return (
      <span>
        {React.Children.map(this.props.children, (Route,index) => {
          return React.cloneElement(Route, { pathName: this.state.currentPath, params: this.state.params });
        })}
      </span>
    )
  }
}

export default Router;


