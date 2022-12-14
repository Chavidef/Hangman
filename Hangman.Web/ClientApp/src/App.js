import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home'
import PlayHangman from './pages/PlayHangman'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/playhangman/:category' component={PlayHangman}/>
      </Layout>
    );
  }
}
