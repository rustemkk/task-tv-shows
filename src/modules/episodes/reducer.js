import { uniq } from 'lodash';
import { combineReducers } from 'redux';

import * as episodesConstants from './constants';


export const episodes = (state = {}, action) => {
  switch (action.type) {
    case episodesConstants.LOAD_EPISODES_SUCCESS:
      return { ...state, ...action.episodes };
    default:
      return state;
  }
};

export const episodesIds = (state = [], action) => {
  switch (action.type) {
    case episodesConstants.LOAD_EPISODES_SUCCESS:
      return uniq([...state, ...action.episodesIds]);
    default:
      return state;
  }
};

export default combineReducers({
  episodes,
  episodesIds,
});