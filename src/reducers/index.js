// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
