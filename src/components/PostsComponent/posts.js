import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Posts extends Component {
  _navigate = () => {
    this.props.navigator.push({
      name: 'Home',
    });
  }
  render() {
    return (
      <View style={{margin: 20}}>
        <TouchableHighlight style={{backgroundColor: 'red'}} onPress={ () => this._navigate() }>
            <Text>Back</Text>
        </TouchableHighlight>
        <View style={{margin: 20}}>
          <Text onPress={Actions.author}>Posts Component</Text>
        </View>
      </View>
    );
  }
}

export default Posts;
