import React, { Component } from 'react';
import { View, Navigator } from 'react-native';

import Menu from '../MenuComponent/menu';
import Posts from '../PostsComponent/posts';
import Author from '../AuthorComponent/author';

class Main extends Component {
  renderScene(route, navigator) {
    if (route.name === 'posts') {
      return <Posts navigator={navigator}/>;
    } else if (route.name === 'author') {
      return <Author navigator={navigator}/>;
    } if (route.name === 'menu') {
      return (<Menu navigator={navigator}/>);
    }
    return (<Menu navigator={navigator}/>);
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: 'menu'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

export default Main;
