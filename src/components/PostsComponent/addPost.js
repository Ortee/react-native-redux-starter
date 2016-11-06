import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  addpost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    width: 300,
    height: 40,
  },
  buttonText: {
    paddingTop: 6,
    color: '#00d8ff',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
    };
  }
  render() {
    return (
      <View style={styles.addpost}>
        <Text>ADD POST</Text>
        <TextInput
          ref="name"
          style={styles.input}
          placeholder="name"
          keyboardType="default"
          autoCorrect
          autoFocus
          onChangeText={(name) => this.setState({name: name})}
        editable/>
        <TextInput
          ref="content"
          style={styles.input}
          placeholder="content"
          keyboardType="default"
          autoCorrect
          autoFocus
          onChangeText={(content) => this.setState({content: content})}
        editable/>
        <TouchableHighlight style={styles.button} onPress={() => this.submitForm()}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableHighlight>
      </View>
    );
  }
  submitForm = () => {
    this.props.addPost(this.state.name, this.state.content);
    this.props.changeRoute('posts')
  }
}

AddPost.propTypes =  {

};

export default AddPost;
