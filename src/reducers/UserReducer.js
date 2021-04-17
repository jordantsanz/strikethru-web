import { ActionTypes } from '../actions';

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return { ...action.payload };
    case ActionTypes.LOG_OUT:
      return { ...initialState };
    default:
      return {
        ...initialState,
      };
  }
};

export default UserReducer;
