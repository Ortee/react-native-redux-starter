import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MenuComponent from './MenuComponent/menu';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    route: state.route,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispachToProps)(MenuComponent);

export default MainApp;
