import { put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { apiGET } from 'utils';

import * as episodesActions from './actions';
import * as episodesConstants from './constants';
import { episodesSchema } from './schemas';


function* loadEpisodesTask({ showId }) {
  try {
    const result = yield apiGET(`/shows/${showId}/episodes`);
    const normalizedEpisodes = normalize(result.map(episode => ({ ...episode, showId })), episodesSchema);
    yield put(episodesActions.loadEpisodesSuccess(normalizedEpisodes));
  } catch (err) {
    console.log('loadEpisodesTaskError', err);
  }
}

function* watchLoadEpisodes() {
  yield takeLatest(episodesConstants.LOAD_EPISODES_REQUEST, loadEpisodesTask);
}

export default [
  watchLoadEpisodes(),
];