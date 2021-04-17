import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  UPLOAD_FILE: 'UPLOAD_FILE',
};

export function logInUser(userProfileObj, token) {
  const username = userProfileObj.uid;
  return (dispatch) => {
    axios.post(`${ROOT_URL}/user/${username}`, { name: userProfileObj.displayName, username })
      .then((result) => {
        dispatch({ type: ActionTypes.LOG_IN, payload: { user: userProfileObj, token } });
      })

      .catch((error) => {
        console.log(error);
      });
  };
}

export function logOutUser() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOG_OUT, payload: '' });
  };
}

export function sendFile(file) {
  return (dispatch) => {
    axios.post(ROOT_URL, file)
      .then((result) => {
        dispatch({ type: ActionTypes.UPLOAD_FILE, payload: result });
      })

      .catch((error) => {
        console.log(error);
      });
  };
}
