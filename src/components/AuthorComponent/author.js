import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-design';

class Author extends Component {
  _navigate = () => {
    this.props.navigator.push({
      name: 'Home',
    });
  }
  render() {
    return (
      <View style={{margin: 20, backgroundColor: 'grey'}}>
        <Button value="Menu" raised onPress={ () => this._navigate() } />
        <View style={{margin: 120}}>
          <Text>Author Component</Text>
        </View>
      </View>
    );
  }
}

Author.propTypes =  {
  navigator: React.PropTypes.object,
};

export default Author;
