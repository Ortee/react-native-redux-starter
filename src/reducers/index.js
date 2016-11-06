import { combineReducers } from 'redux';

import posts from './posts';
import route from './route';

const rootReducer = combineReducers({
  posts,
  route,
});

export default rootReducer;
