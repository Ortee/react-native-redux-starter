import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 345,
  },
});

class Author extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png'}}
          style={styles.logo}
        />
      </View>
    );
  }
}

Author.propTypes =  {
  changeRoute: React.PropTypes.func,
};

export default Author;
