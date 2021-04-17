// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import Reducer from './reducer';

const rootReducer = combineReducers({
  reducer: Reducer,
});

export default rootReducer;
