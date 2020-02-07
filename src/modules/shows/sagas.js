import { put, takeLatest } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { apiGET } from 'utils';

import * as showsActions from './actions';
import * as showsConstants from './constants';
import { showsSchema } from './schemas';


function* loadShowTask({ showId }) {
  try {
    const result = yield apiGET(`/shows/${showId}`);
    const normalizedShows = normalize([result], showsSchema);
    yield put(showsActions.loadShowsSuccess(normalizedShows));
  } catch (err) {
    console.log('loadShowTaskError', err);
  }
}

function* loadShowsTask() {
  try {
    const result = yield apiGET('/search/shows?q=girls');
    const normalizedShows = normalize(result.map(s => s.show), showsSchema);
    yield put(showsActions.loadShowsSuccess(normalizedShows));
  } catch (err) {
    console.log('loadShowsTaskError', err);
  }
}

function* watchLoadShow() {
  yield takeLatest(showsConstants.LOAD_SHOW_REQUEST, loadShowTask);
}

function* watchLoadShows() {
  yield takeLatest(showsConstants.LOAD_SHOWS_REQUEST, loadShowsTask);
}

export default [
  watchLoadShow(),
  watchLoadShows(),
];