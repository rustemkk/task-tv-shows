import * as showConstants from './constants';


export const loadShow = (showId) => ({
  type: showConstants.LOAD_SHOW_REQUEST,
  showId,
});

export const loadShows = () => ({
  type: showConstants.LOAD_SHOWS_REQUEST,
});

export const loadShowsSuccess = ({ entities: { shows }, result }) => ({
  type: showConstants.LOAD_SHOWS_SUCCESS,
  shows,
  showsIds: result,
});