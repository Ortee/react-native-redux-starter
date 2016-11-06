import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    marginTop: 10,
    backgroundColor: '#222',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    color: '#00d8ff',
    marginLeft: 10,
  },
  remove: {
    alignItems: 'center',
  },
  removeText: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    color: '#00d8ff',
    fontSize: 18,
    fontWeight: '600',
  },
  removeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#00d8ff',
    borderLeftWidth: 1,
    borderBottomColor: '#00d8ff',
    borderBottomWidth: 1,
    borderTopColor: '#00d8ff',
    borderTopWidth: 1,
    marginTop: 10,
    backgroundColor: '#222',
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
