import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    marginTop: 10,
    backgroundColor: colors.dark,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    color: colors.blue,
    marginLeft: 10,
  },
  remove: {
    alignItems: 'center',
  },
  removeText: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    color: colors.blue,
    fontSize: 18,
    fontWeight: '600',
  },
  removeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: colors.blue,
    borderLeftWidth: 1,
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    borderTopColor: colors.blue,
    borderTopWidth: 1,
    marginTop: 10,
    backgroundColor: colors.dark,
  },
});

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.item}>
          <Text style={styles.text}>Name: {this.props.post.name}</Text>
          <Text style={styles.text}>Content: {this.props.post.content}</Text>
        </View>
        <View style={styles.removeBox}>
          <TouchableHighlight
            style={styles.remove}
            onPress={this.props.removePost.bind(null, this.props.post.name, this.props.i)}>
            <Text style={styles.removeText}>REMOVE</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Post.propTypes =  {
  post: React.PropTypes.object,
  i: React.PropTypes.number,
  removePost: React.PropTypes.func,
};

export default Post;
