import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  posts: {
    flex: 1,
  },
  headerText: {
    fontSize: 25,
  },
  table: {
    marginTop: 20,
  },
  item: {
    borderColor: '#000',
    borderWidth: 1,
  },
  offline: {
    color: '#FF0000',
    fontWeight: '600',
  },
});

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.showPosts();
  }
  renderData = () =>{

  }
  render() {
    if (this.props.posts.length === 0) {
      return (
      <View style={styles.posts}>
        <Text style={styles.headerText}>Posts from My API</Text>
        <Text style={styles.offline}>SERVER OFFLINE</Text>
      </View>);
    }
    return (
        <View style={styles.posts}>
          <Text style={styles.headerText}>Posts from My API</Text>
          <View style={styles.table}>
            {this.props.posts.map((elem, index)=>{
              return (<View key={index} style={styles.item}>
                <Text>Name: {elem.name}</Text>
                <Text>Content: {elem.content}</Text>
              </View>);
            })}
          </View>
        </View>
    );
  }
}

Posts.propTypes =  {
  posts: React.PropTypes.array,
  showPosts: React.PropTypes.func,
};

export default Posts;
