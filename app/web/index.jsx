import React, { Component } from 'react';
import Router from 'components/router';
import Route from 'components/route';
import loadable from '@loadable/component'
import Layout from 'components/layout';

// import List from 'page/list';
const List = loadable(() => import(/* webpackPrefetch: true */'page/list'));
const Home = loadable(() => import(/* webpackPrefetch: true */'page/home'));

export default (context) => {
  
  return (
    <Layout>
      <Router context={context}>
        <Route path='/home' context={context} component={Home}/>
        <Route path='/' component={List} context={context}/>
        {/* <Route path='/home' component={Home}/> */}
      </Router>
    </Layout>
  )
}
