import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Author extends Component {
  _navigate = () => {
    this.props.navigator.push({
      name: 'Home',
    });
  }
  render() {
    return (
      <View style={{margin: 20}}>
        <TouchableHighlight onPress={ () => this._navigate() }>
            <Text>Back</Text>
        </TouchableHighlight>
        <View style={{margin: 120}}>
          <Text onPress={Actions.posts}>Author Component</Text>
        </View>
      </View>
    );
  }
}

export default Author;
