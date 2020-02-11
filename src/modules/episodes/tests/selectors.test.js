/* eslint no-undef:0 */
import { getAllEpisodes, getEpisodeById, getEpisodesByShowId } from '../selectors';


describe('episodes selectors tests', () => {

  const mockedState = {
    episodes: {
      episodes: {
        1: { id: 1, season: 1, number: 1, showId: 66 },
        2: { id: 2, season: 1, number: 2, showId: 66 },
        3: { id: 3, season: 1, number: 3, showId: 66 },
        4: { id: 4, season: 1, number: 4, showId: 66 },
        5: { id: 5, season: 2, number: 1, showId: 66 },
        6: { id: 6, season: 1, number: 1, showId: 77 },
      },
      episodesIds: [1, 2, 3, 4, 5, 6],
    }
  };

  it('Should select all episodes', () => {
    expect(getAllEpisodes(mockedState)).toEqual([
      { id: 5, season: 2, number: 1, showId: 66 },
      { id: 4, season: 1, number: 4, showId: 66 },
      { id: 3, season: 1, number: 3, showId: 66 },
      { id: 2, season: 1, number: 2, showId: 66 },
      { id: 1, season: 1, number: 1, showId: 66 },
      { id: 6, season: 1, number: 1, showId: 77 },
    ]);
  });

  it('Should select episode by id', () => {
    expect(getEpisodeById(2)(mockedState)).toEqual({ id: 2, season: 1, number: 2, showId: 66 });
    expect(getEpisodeById(5)(mockedState)).toEqual({ id: 5, season: 2, number: 1, showId: 66 });
  });

  it('Should select episodes by showId', () => {
    expect(getEpisodesByShowId(66)(mockedState)).toEqual([
      { id: 5, season: 2, number: 1, showId: 66 },
      { id: 4, season: 1, number: 4, showId: 66 },
      { id: 3, season: 1, number: 3, showId: 66 },
      { id: 2, season: 1, number: 2, showId: 66 },
      { id: 1, season: 1, number: 1, showId: 66 },
    ]);
    expect(getEpisodesByShowId(77)(mockedState)).toEqual([
      { id: 6, season: 1, number: 1, showId: 77 },
    ]);
  });

});
