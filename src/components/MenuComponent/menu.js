import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

class Menu extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Button onPress={this.navigate.bind(this, 'posts')}>POSTS</Button>
        <Button onPress={this.navigate.bind(this, 'author')}>AUTHOR</Button>
      </View>
    );
  }
  navigate = (routeName) => {
    this.props.navigator.push({
      name: routeName,
    })
  }
}

export default Menu;
