/* eslint-disable no-case-declarations */
import { ActionTypes } from '../actions';

const initialState = {
  username: '',
  name: '',
  chosenFilter: [],
  chosenFilterString: '',
  filterTypes: [],
  filterTypesString: '',
};

const UserReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LOG_IN:
      let theChosenFilter = [];
      if (action.payload.chosenFilter !== 'none') {
        theChosenFilter = action.payload.chosenFilter.split(',');
      }
      let filterTypes = [];
      if (action.payload.filterTypes !== '') {
        console.log('PA', action.payload);
        filterTypes = action.payload.filterTypes.split(',');
      }
      return {
        username: action.payload.username,
        name: action.payload.name,
        chosenFilterString: action.payload.chosenFilter,
        chosenFilter: theChosenFilter,
        filterTypesString: action.payload.filterTypes,
        filterTypes,
      };
    case ActionTypes.LOG_OUT:
      return { ...initialState };
    case ActionTypes.UPDATE_PREFS:
      let chosenFilter = [];
      if (action.payload.chosenFilter !== 'none') {
        chosenFilter = action.payload.chosenFilter.split(',');
      }
      let theFilterTypes = [];
      if (action.payload.filterTypes !== '' && action.payload.filterTypes !== 'undefined') {
        console.log(action.payload.filterTypes);
        theFilterTypes = action.payload.filterTypes.split(',');
      }

      console.log('chosenfilter', chosenFilter);
      return {
        ...state,
        chosenFilter,
        filterTypes: theFilterTypes,
        filterTypesString: action.payload.filterTypes,
        chosenFilterString: action.payload.chosenFilter,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
