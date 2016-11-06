import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Connector from './components/app';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Connector/>
      </Provider>
    );
  }
}
