import * as actions from '../State/actions';
import * as types from '../State/actionTypes';

describe('<Overview /> actions', () => {
  it('should create an action to add api call result', () => {
    const result = { movie: { name: 'test' } };
    const expectedAction = {
      type: types.DATA_SUCCESS,
      result,
    };
    expect(actions.dataSuccess(result)).toEqual(expectedAction);
  });

  it('should create an action to inform whether data is fetching', () => {
    const expectedAction = {
      type: types.DATA_FETCHING,
      fetching: true,
    };
    expect(actions.dataFetching(true)).toEqual(expectedAction);
  });

  it('should create an action to inform whether data has Errored', () => {
    const expectedAction = {
      type: types.DATA_ERROR,
      error: true,
    };
    expect(actions.dataError()).toEqual(expectedAction);
  });

  it('should create an action to save most recently viewed', () => {
    const id = 10;
    const expectedAction = {
      type: types.ID,
      id,
    };
    expect(actions.saveId(id)).toEqual(expectedAction);
  });
});