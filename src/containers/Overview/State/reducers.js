import {
  ID, DATA_SUCCESS, DATA_ERROR, DATA_FETCHING,
} from './actionTypes';

// data

const reducer = (state = {
  error: false,
  data: [],
  fetching: false,
  mostRecentViewed: 0,
}, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return { ...state, data: [...state.data, action.result] };
    case DATA_ERROR:
      return { ...state, error: true };
    case DATA_FETCHING:
      return { ...state, fetching: action.fetching };
    case ID:
      return { ...state, mostRecentViewed: action.id };
    default:
      return state;
  }
};

export default reducer;
