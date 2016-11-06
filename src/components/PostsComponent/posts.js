import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';
import Post from './post';

const styles = StyleSheet.create({
  posts: {
    flex: 1,
  },
  headerText: {
    fontSize: 25,
  },
  table: {
    marginBottom: 20,
  },
  offline: {
    color: '#FF0000',
    fontWeight: '600',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#222',
    height: 60,
    borderWidth: 3,
    borderColor: '#00d8ff',
  },
  addButtonText: {
    color: '#00d8ff',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 13,
  },
});

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.showPosts();
  }
  render() {
    if (this.props.posts.length === 0) {
      return (
      <View style={styles.spinner}>
        <GiftedSpinner />
      </View>);
    }
    return (
        <ScrollView style={styles.posts}>
          <View style={styles.table}>
            {this.props.posts.map((elem, index)=>{
              return (
                <Post
                  key={index}
                  i={index}
                  post={elem}
                  {...this.props}
                />
              );
            })}
          </View>
          <TouchableHighlight style={styles.addButton} onPress={() => this.props.changeRoute('addpost')}>
            <Text style={styles.addButtonText}>ADD POST</Text>
          </TouchableHighlight>
        </ScrollView>
    );
  }
}

Posts.propTypes =  {
  posts: React.PropTypes.array,
  showPosts: React.PropTypes.func,
  changeRoute: React.PropTypes.func,
};

export default Posts;
