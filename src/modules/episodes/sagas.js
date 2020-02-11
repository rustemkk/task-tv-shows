import { get } from 'lodash';
import { put, select, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { apiGET } from 'utils';

import * as episodesActions from './actions';
import * as episodesConstants from './constants';
import { episodesSchema } from './schemas';
import { getShowById } from 'modules/shows/selectors';


function* loadEpisodeTask({ episodeId }) {
  try {
    let result = yield apiGET(`/episodes/${episodeId}?embed=show`);
    if (result.status === 404) {
      result = { id: episodeId, ...result };
    }
    const showId = get(result, '_embedded.show.id');
    const showName = get(result, '_embedded.show.name');
    delete result._embedded;
    const normalizedEpisodes = normalize([{ ...result, showId, showName }], episodesSchema);
    yield put(episodesActions.loadEpisodesSuccess(normalizedEpisodes));
  } catch (err) {
    console.log('loadEpisodeTaskError', err);
  }
}

function* loadEpisodesTask({ showId }) {
  try {
    const result = yield apiGET(`/shows/${showId}/episodes`);
    const show = yield select(getShowById(showId));
    const showName = get(show, 'name');
    const normalizedEpisodes = normalize(result.map(episode => ({ ...episode, showId, showName })), episodesSchema);
    yield put(episodesActions.loadEpisodesSuccess(normalizedEpisodes));
  } catch (err) {
    console.log('loadEpisodesTaskError', err);
  }
}

function* watchLoadEpisode() {
  yield takeLatest(episodesConstants.LOAD_EPISODE_REQUEST, loadEpisodeTask);
}

function* watchLoadEpisodes() {
  yield takeLatest(episodesConstants.LOAD_EPISODES_REQUEST, loadEpisodesTask);
}

export default [
  watchLoadEpisode(),
  watchLoadEpisodes(),
];