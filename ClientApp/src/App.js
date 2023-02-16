import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Entities } from './components/Entities';

import './custom.css'
/*
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Entities} />
      </Layout>
    );
  }
}
*/

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Entities />
        );
    }
}