import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-material-design';

class Menu extends Component {
  _navigate = (routeName) => {
    this.props.navigator.push({
      name: routeName,
    });
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fafafa',
      },
      header: {
        flex: 0.07,
        marginTop: 20,
        backgroundColor: '#fff',
      },
      headerText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30,
        color: '#262626',
      },
      navButtonRight: {
        backgroundColor: '#3897f0',
        flexGrow: 1,
        borderLeftColor: '#fff',
        borderLeftWidth: 5,
      },
      navButtonLeft: {
        backgroundColor: '#3897f0',
        flexGrow: 1,
        borderRightColor: '#fff',
        borderRightWidth: 5,
      },
      navButton: {
        backgroundColor: '#3897f0',
        flexGrow: 1,
      },
      navButtonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 13,
      },
      nav: {
        flex: 0.09,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      },
      content: {
        borderTopColor: '#dbdbdb',
        borderTopWidth: 1,
        marginTop: 5,
        flex: 0.79,
        backgroundColor: '#fafafa',
      },
      footer: {
        flex: 0.05,
        backgroundColor: '#fafafa',
        borderTopColor: '#dbdbdb',
        borderTopWidth: 1,
      },
      footerText: {
        paddingTop: 3,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        color: '#262626',
      },
    });
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>REACT NATIVE STARTER</Text>
          </View>
          <View style={styles.nav}>
            <TouchableHighlight style={styles.navButtonLeft} onPress={() => this._navigate('menu')}>
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navButton} onPress={() => this._navigate('posts')}>
              <Text style={styles.navButtonText}>Posts</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navButtonRight} onPress={() => this._navigate('author')}>
              <Text style={styles.navButtonText}>Author</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            <Text>Content</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>ORTEEDEV</Text>
          </View>
      </View>
    );
  }
}

Menu.propTypes =  {
  navigator: React.PropTypes.object,
};

export default Menu;
