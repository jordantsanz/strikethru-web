import { ActionTypes } from '../actions';

const initialState = {
  username: '',
  name: '',
  token: '',
};

const UserReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return { username: action.payload.user.uid, name: action.payload.user.displayName, ...action.payload.token };
    case ActionTypes.LOG_OUT:
      return { ...initialState };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
