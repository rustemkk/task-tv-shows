import * as episodesConstants from './constants';


export const loadEpisodes = (showId) => ({
  type: episodesConstants.LOAD_EPISODES_REQUEST,
  showId,
});

export const loadEpisodesSuccess = ({ entities: { episodes }, result }) => ({
  type: episodesConstants.LOAD_EPISODES_SUCCESS,
  episodes,
  episodesIds: result,
});