import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-design';

class Posts extends Component {
  _navigate = () => {
    this.props.navigator.push({
      name: 'Home',
    });
  }
  render() {
    var styles = StyleSheet.create({
    halfHeight: {
        flex: .5,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#000'
    }
  });
    return (
        <View style={styles.halfHeight} />
    );
  }
}

Posts.propTypes =  {
  navigator: React.PropTypes.object,
};

export default Posts;
