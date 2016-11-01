import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Posts from './components/PostsComponent/posts';
import Author from './components/AuthorComponent/author';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="posts" component={Posts} title="Posts" initial/>
          <Scene key="author" component={Author} title="Author" />
        </Scene>
      </Router>
    );
  }
}
