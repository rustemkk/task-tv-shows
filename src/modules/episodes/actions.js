import * as episodesConstants from './constants';


export const loadEpisode = (episodeId) => ({
  type: episodesConstants.LOAD_EPISODE_REQUEST,
  episodeId,
});

export const loadEpisodes = (showId) => ({
  type: episodesConstants.LOAD_EPISODES_REQUEST,
  showId,
});

export const loadEpisodesSuccess = ({ entities: { episodes }, result }) => ({
  type: episodesConstants.LOAD_EPISODES_SUCCESS,
  episodes,
  episodesIds: result,
});