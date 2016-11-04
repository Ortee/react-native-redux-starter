import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class Author extends Component {
  render() {
    return (
      <View style={{margin: 20, backgroundColor: 'grey'}}>
        <View style={{margin: 120}}>
          <Text>Author Component</Text>
        </View>
        <TouchableHighlight onPress={() => this.props.changeRoute('posts')}>
          <Text>Home</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Author.propTypes =  {
  changeRoute: React.PropTypes.func,
};

export default Author;
