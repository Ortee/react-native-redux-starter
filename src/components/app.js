import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainComponent from './MainComponent/main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispachToProps)(MainComponent);

export default MainApp;
