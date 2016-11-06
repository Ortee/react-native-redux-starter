import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  author: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 30,
    fontWeight: '600',
  },
  desc: {
    fontSize: 25,
  },
});

class Author extends Component {
  render() {
    return (
      <View style={styles.author}>
        <Text style={styles.username}>Ortee</Text>
        <Text style={styles.desc}>https://github.com/Ortee</Text>
        <Text style={styles.desc}>Follow me on github</Text>
      </View>
    );
  }
}

Author.propTypes =  {
  changeRoute: React.PropTypes.func,
};

export default Author;
