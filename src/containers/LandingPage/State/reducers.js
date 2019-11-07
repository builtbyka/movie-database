import {
  DATA_SUCCESS, DATA_SECONDARY_SUCCESS, DATA_ERROR, DATA_FETCHING,
} from './actionTypes';

const reducer = (state = {
  error: false,
  data: [],
  genres: [],
  fetching: false,
}, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return { ...state, data: action.result };
    case DATA_SECONDARY_SUCCESS:
      return { ...state, genres: action.result };
    case DATA_ERROR:
      return { ...state, error: true };
    case DATA_FETCHING:
      return { ...state, fetching: action.fetching };
    default:
      return state;
  }
};

export default reducer;
