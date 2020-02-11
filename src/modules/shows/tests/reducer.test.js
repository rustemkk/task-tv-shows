import { normalize } from 'normalizr';

import { loadShowsSuccess } from '../actions';
import { shows as showsReducer, showsIds as showsIdsReducer } from '../reducer';
import { showsSchema } from '../schemas';


describe('shows reducer tests', () => {

  let showsState = {};
  let showsIdsState = [];

  it('Should add loaded shows to empty state', () => {
    const newShows = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }];
    const normalizedShows = normalize(newShows, showsSchema);
    showsState = showsReducer(showsState, loadShowsSuccess(normalizedShows));
    expect(showsState).toEqual({
      1: { id: 1, name: 'one' },
      2: { id: 2, name: 'two' },
    });
    showsIdsState = showsIdsReducer(showsIdsState, loadShowsSuccess(normalizedShows));
    expect(showsIdsState).toEqual([1, 2]);
  });

  it('Should add loaded shows to empty state', () => {
    const newShows = [{ id: 3, name: 'three' }];
    const normalizedShows = normalize(newShows, showsSchema);
    showsState = showsReducer(showsState, loadShowsSuccess(normalizedShows));
    expect(showsState).toEqual({
      1: { id: 1, name: 'one' },
      2: { id: 2, name: 'two' },
      3: { id: 3, name: 'three' },
    });
    showsIdsState = showsIdsReducer(showsIdsState, loadShowsSuccess(normalizedShows));
    expect(showsIdsState).toEqual([1, 2, 3]);
  });

});
