import { ActionTypes } from '../actions';

const initialState = {
  filename: '',
  file: '',
};

const UserReducer = (state = initialState, action) => {
  console.log('action', action.payload);
  switch (action.type) {
    case ActionTypes.UPLOAD_FILE:
      return { ...state, filename: action.payload };
    case ActionTypes.PROCESS_TEXT:
      return { file: action.payload };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
