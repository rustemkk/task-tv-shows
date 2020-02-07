import { get } from 'lodash';
import { createSelector } from 'reselect';


export const getEpisodesEntities = (state) =>
  get(state, 'episodes.episodes');

export const getEpisodesIds = (state) =>
  get(state, 'episodes.episodesIds');

export const getAllEpisodes = createSelector(
  getEpisodesEntities,
  getEpisodesIds,
  (episodes, episodesIds) => episodesIds.map(id => episodes[id]).sort((a, b) => a.airdate > b.airdate ? -1 : 1)
);

export const getEpisodeById = (episodeId) => createSelector(
  getEpisodesEntities,
  (episodes) => episodes[episodeId]
);

export const getEpisodesByShowId = (showId) => createSelector(
  getAllEpisodes,
  (episodes) => episodes.filter(episode => episode.showId === showId)
);