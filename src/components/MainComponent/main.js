import React, { Component } from 'react';
import { Navigator, View } from 'react-native';

import Menu from '../MenuComponent/menu';
import Posts from '../PostsComponent/posts';
import Author from '../AuthorComponent/author';


class Main extends Component {
  renderScene(route, navigator) {
    if (route.name === 'posts') {
      return <Posts {...this.props} navigator={navigator}/>;
    } else if (route.name === 'author') {
      return <Author {...this.props} navigator={navigator}/>;
    }
    return (<Menu navigator={navigator}/>);
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <Navigator
          initialRoute={{name: 'menu'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

export default Main;
