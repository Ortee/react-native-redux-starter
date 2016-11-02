import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux'
import store from './store/store';

import Connector from './components/app';
import Posts from './components/PostsComponent/posts';
import Author from './components/AuthorComponent/author';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="connector" component={Connector} title="Connector">
            <Scene key="posts" component={Posts} title="Posts" initial/>
            <Scene key="author" component={Author} title="Author" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
