/* eslint no-undef:0 */
import { getAllShows, getShowById } from '../selectors';


describe('shows selectors tests', () => {

  const mockedState = {
    shows: {
      shows: {
        1: { id: 1, name: 'one' },
        2: { id: 2, name: 'two' },
      },
      showsIds: [1, 2],
    }
  };

  it('Should select all shows', () => {
    expect(getAllShows(mockedState)).toEqual([{ id: 1, name: 'one' }, { id: 2, name: 'two' }]);
  });

  it('Should select show by id', () => {
    expect(getShowById(2)(mockedState)).toEqual({ id: 2, name: 'two' });
    expect(getShowById(1)(mockedState)).toEqual({ id: 1, name: 'one' });
  });

});
