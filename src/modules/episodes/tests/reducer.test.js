import { normalize } from 'normalizr';

import { loadEpisodesSuccess } from '../actions';
import { episodes as episodesReducer, episodesIds as episodesIdsReducer } from '../reducer';
import { episodesSchema } from '../schemas';


describe('episodes reducer tests', () => {

  let episodesState = {};
  let episodesIdsState = [];

  it('Should add loaded episodes to empty state', () => {
    const newEpisodes = [
      { id: 1, season: 1, number: 1, showId: 66 },
      { id: 2, season: 1, number: 2, showId: 66 },
      { id: 3, season: 1, number: 3, showId: 66 },
      { id: 4, season: 1, number: 4, showId: 66 },
      { id: 5, season: 2, number: 1, showId: 66 },
    ];
    const normalizedEpisodes = normalize(newEpisodes, episodesSchema);
    episodesState = episodesReducer(episodesState, loadEpisodesSuccess(normalizedEpisodes));
    expect(episodesState).toEqual({
      1: { id: 1, season: 1, number: 1, showId: 66 },
      2: { id: 2, season: 1, number: 2, showId: 66 },
      3: { id: 3, season: 1, number: 3, showId: 66 },
      4: { id: 4, season: 1, number: 4, showId: 66 },
      5: { id: 5, season: 2, number: 1, showId: 66 },
    });
    episodesIdsState = episodesIdsReducer(episodesIdsState, loadEpisodesSuccess(normalizedEpisodes));
    expect(episodesIdsState).toEqual([1, 2, 3, 4, 5]);
  });

  it('Should add loaded shows to empty state', () => {
    const newEpisodes = [
      { id: 6, season: 2, number: 1, showId: 66 },
      { id: 7, season: 2, number: 2, showId: 66 },
    ];
    const normalizedEpisodes = normalize(newEpisodes, episodesSchema);
    episodesState = episodesReducer(episodesState, loadEpisodesSuccess(normalizedEpisodes));
    expect(episodesState).toEqual({
      1: { id: 1, season: 1, number: 1, showId: 66 },
      2: { id: 2, season: 1, number: 2, showId: 66 },
      3: { id: 3, season: 1, number: 3, showId: 66 },
      4: { id: 4, season: 1, number: 4, showId: 66 },
      5: { id: 5, season: 2, number: 1, showId: 66 },
      6: { id: 6, season: 2, number: 1, showId: 66 },
      7: { id: 7, season: 2, number: 2, showId: 66 },
    });
    episodesIdsState = episodesIdsReducer(episodesIdsState, loadEpisodesSuccess(normalizedEpisodes));
    expect(episodesIdsState).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

});
