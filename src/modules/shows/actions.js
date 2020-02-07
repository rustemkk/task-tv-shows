import * as showConstants from "./constants";


export const loadShows = () => ({
  type: showConstants.LOAD_SHOWS_REQUEST,
})

export const loadShowsSuccess = ({ entities: { shows }, result }) => ({
  type: showConstants.LOAD_SHOWS_SUCCESS,
  shows,
  showsIds: result,
});