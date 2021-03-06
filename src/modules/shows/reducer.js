import { uniq } from 'lodash';
import { combineReducers } from 'redux';

import * as showsConstants from './constants';


export const shows = (state = {}, action) => {
  switch (action.type) {
    case showsConstants.LOAD_SHOWS_SUCCESS:
      return { ...state, ...action.shows };
    default:
      return state;
  }
};

export const showsIds = (state = [], action) => {
  switch (action.type) {
    case showsConstants.LOAD_SHOWS_SUCCESS:
      return uniq([...state, ...action.showsIds]);
    default:
      return state;
  }
};

export default combineReducers({
  shows,
  showsIds,
});