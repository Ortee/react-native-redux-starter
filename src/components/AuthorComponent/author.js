import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Author extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.posts}>Author Component</Text>
      </View>
    );
  }
}

export default Author;
