import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={Actions.posts}>Main Component</Text>
      </View>
    );
  }
}

export default Main;
