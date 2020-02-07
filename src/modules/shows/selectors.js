import { get } from 'lodash';
import { createSelector } from 'reselect';


export const getShowsEntities = (state) =>
  get(state, 'shows.shows');

export const getShowsIds = (state) =>
  get(state, 'shows.showsIds');

export const getAllShows = createSelector(
  getShowsEntities,
  getShowsIds,
  (shows, showsIds) => showsIds.map(id => shows[id]).sort((a, b) => a.name > b.name ? 1 : -1)
);

export const getShowById = (showId) => createSelector(
  getShowsEntities,
  (shows) => shows[showId]
);