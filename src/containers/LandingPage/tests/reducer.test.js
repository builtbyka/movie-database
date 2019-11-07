import reducer from '../State/reducers';
import * as types from '../State/actionTypes';

describe('<LandingPage /> reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        error: false,
        data: [],
        genres: [],
        fetching: false,
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

  it('should handle DATA_SUCCESS', () => {
    const action = {
      type: types.DATA_SUCCESS,
      result: [1, 2, 3],
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({ data: [1, 2, 3] });
  });

  it('should handle DATA_ERROR', () => {
    const action = {
      type: types.DATA_ERROR,
      error: true,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({ error: true });
  });

  it('should handle DATA_SECONDARY_SUCCESS', () => {
    const action = {
      type: types.DATA_SECONDARY_SUCCESS,
      result: [1, 2, 3],
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({ genres: [1, 2, 3] });
  });
});
