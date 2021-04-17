import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  UPLOAD_FILE: 'UPLOAD_FILE',
  PROCESS_TEXT: 'PROCESS_TEXT',
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

export function sendFile(file, username) {
  return (dispatch) => {
    console.log('???/');
    console.log(username);
    axios.post(`${ROOT_URL}/text/${username}`, file)
      .then((result) => {
        console.log('result', result);
        dispatch({ type: ActionTypes.UPLOAD_FILE, payload: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function processText(filename, username) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/upload/${username}`, { filename })
      .then((result) => {
        console.log('result', result);
        dispatch({ type: ActionTypes.PROCESS_TEXT, payload: result.data });
      })

      .catch((error) => {
        console.log(error);
      });
  };
}
