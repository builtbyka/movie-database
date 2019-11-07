import reducer from '../State/reducers';
import * as types from '../State/actionTypes';

describe('<Overview /> reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        error: false,
        data: [],
        fetching: false,
        mostRecentViewed: 0,
      },
    );
  });

  it('should handle DATA_FETCHING', () => {
    const action = {
      type: types.DATA_FETCHING,
      fetching: true,
    };
      // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({ fetching: true });
  });

  it('should handle DATA_ERROR', () => {
    const action = {
      type: types.DATA_ERROR,
      error: true,
    };
      // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({ error: true });
  });

  it('should handle ID', () => {
    const action = {
      type: types.ID,
      id: 123,
    };
      // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({ mostRecentViewed: 123 });
  });
});
