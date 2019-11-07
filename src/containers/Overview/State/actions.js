/* eslint-disable import/prefer-default-export */

import {
  DATA_SUCCESS, DATA_ERROR, DATA_FETCHING, ID,
} from './actionTypes';

export function dataFetching(boo) {
  return { type: DATA_FETCHING, fetching: boo };
}

export function dataSuccess(result) {
  return { type: DATA_SUCCESS, result };
}

export function dataError() {
  return { type: DATA_ERROR, error: true };
}

export function saveId(id) {
  return { type: ID, id };
}
