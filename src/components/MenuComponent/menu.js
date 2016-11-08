import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';

import Posts from '../PostsComponent/posts';
import Author from '../AuthorComponent/author';
import Home from '../HomeComponent/home';
import AddPost from '../PostsComponent/addPost';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  header: {
    flex: 0.07,
    marginTop: 20,
    backgroundColor: colors.background,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    color: colors.dark,
  },
  navButtonRight: {
    backgroundColor: colors.dark,
    flexGrow: 1,
    borderLeftColor: colors.background,
    borderLeftWidth: 5,
  },
  navButtonLeft: {
    backgroundColor: colors.dark,
    flexGrow: 1,
    borderRightColor: colors.background,
    borderRightWidth: 5,
  },
  navButton: {
    backgroundColor: colors.dark,
    flexGrow: 1,
  },
  navButtonText: {
    color: colors.blue,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 13,
  },
  nav: {
    flex: 0.09,
    flexDirection: 'row',
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  content: {
    borderTopColor: colors.dark,
    borderTopWidth: 1,
    marginTop: 5,
    flex: 0.79,
    backgroundColor: colors.background,
  },
  footer: {
    flex: 0.05,
    backgroundColor: colors.background,
    borderTopColor: colors.dark,
    borderTopWidth: 1,
  },
  footerText: {
    paddingTop: 3,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: colors.dark,
  },
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.props.changeRoute('home');
  }
  renderContent = (name) => {
    if (name === 'posts') {
      return <Posts {...this.props}/>;
    } else if (name === 'author') {
      return <Author {...this.props}/>;
    } else if (name === 'home') {
      return <Home {...this.props}/>;
    } else if (name === 'addpost') {
      return <AddPost {...this.props}/>;
    }
    return <Text>No route</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>REACT NATIVE STARTER</Text>
          </View>
          <View style={styles.nav}>
            <TouchableHighlight style={styles.navButtonLeft} onPress={() => this.props.changeRoute('home')}>
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navButton} onPress={() => this.props.changeRoute('posts')}>
              <Text style={styles.navButtonText}>Posts</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navButtonRight} onPress={() => this.props.changeRoute('author')}>
              <Text style={styles.navButtonText}>Author</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            {this.renderContent(this.props.route)}
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>ORTEEDEV</Text>
          </View>
      </View>
    );
  }
}

Menu.propTypes =  {
  route: React.PropTypes.string,
  changeRoute: React.PropTypes.func,
};

export default Menu;
