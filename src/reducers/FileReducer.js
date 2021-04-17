import { ActionTypes } from '../actions';

const initialState = {
  filename: '',
};

const UserReducer = (state = initialState, action) => {
  console.log('action', action.payload);
  switch (action.type) {
    case ActionTypes.UPLOAD_FILE:
      return { filename: action.payload };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
