import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  UPLOAD_FILE: 'UPLOAD_FILE',
  PROCESS_TEXT: 'PROCESS_TEXT',
  UPDATE_PREFS: 'UPDATE_PREFS',
};

export function logInUser(userProfileObj, token) {
  const username = userProfileObj.uid;
  return (dispatch) => {
    axios.post(`${ROOT_URL}/user/${username}`, { name: userProfileObj.displayName, username })
      .then((result) => {
        console.log('userresult', result);
        dispatch({
          type: ActionTypes.LOG_IN,
          payload: {
            username,
            name: result.data.result.name,
            filterTypes: result.data.result.filterTypes === undefined ? '' : result.data.result.filterTypes,
            chosenFilter: result.data.result.chosenFilter,
          },
        });
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

export function processText(filename, username) {
  console.log('filename', filename);

  return (dispatch) => {
    axios.post(`${ROOT_URL}/text/${username}`, { filename })
      .then((result) => {
        console.log('result of process', result);
        dispatch({ type: ActionTypes.PROCESS_TEXT, payload: result.data });
      })

      .catch((error) => {
        console.log(error);
      });
  };
}

export function sendFile(file, username, type) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/upload`, file)
      .then((result) => {
        axios.post(`${ROOT_URL}/text/${username}`, { filename: result.data, countFlag: 'yes' }).then((res) => {
          dispatch({ type: ActionTypes.PROCESS_TEXT, payload: res.data });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function addToPreferences(username, listOfPreferencesFilter, listOfPreferencesChosen) {
  return (dispatch) => {
    // create preferences string
    console.log('listprefs', listOfPreferencesFilter);
    let prefStringFilter = '';
    for (let i = 0; i < listOfPreferencesFilter.length - 1; i += 1) {
      prefStringFilter += listOfPreferencesFilter[i];
      prefStringFilter += ',';
    }
    prefStringFilter += listOfPreferencesFilter[listOfPreferencesFilter.length - 1];

    let prefStringChosen = '';
    if (listOfPreferencesChosen === undefined || listOfPreferencesChosen === null || listOfPreferencesChosen.length === 0) {
      prefStringChosen = 'none';
    } else {
      for (let i = 0; i < listOfPreferencesChosen.length - 1; i += 1) {
        prefStringChosen += listOfPreferencesChosen[i];
        prefStringChosen += ',';
      }
      prefStringChosen += listOfPreferencesChosen[listOfPreferencesChosen.length - 1];
    }

    console.log('username', username);
    console.log('chosenfilter', prefStringChosen);
    console.log('filterlist', prefStringFilter);

    axios.put(`${ROOT_URL}/user/${username}`, { processType: 'word', filterTypes: prefStringFilter, chosenFilter: prefStringChosen })
      .then((result) => {
        console.log('pref result', result);
        dispatch({ type: ActionTypes.UPDATE_PREFS, payload: result.data.result });
      })

      .catch((error) => {
        console.log(error);
      });
  };
}
