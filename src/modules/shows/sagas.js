import { put, takeEvery } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { apiGET } from 'utils';

import * as showsActions from './actions';
import * as showConstants from './constants';
import { showsSchema } from './schemas';


function* loadShowsTask() {
  try {
    const result = yield apiGET('/search/shows?q=girls');
    const normalized = normalize(result.map(s => s.show), showsSchema);
    yield put(showsActions.loadShowsSuccess(normalized));
  } catch (err) {
    console.log('loadShowsTaskError', err);
  }
}

function* watchLoadShows() {
  yield takeEvery(showConstants.LOAD_SHOWS_REQUEST, loadShowsTask);
}

export default [
  watchLoadShows(),
];