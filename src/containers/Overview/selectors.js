/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const getMovieData = (state) => state.movie.data;
export const getMovieError = (state) => state.movie.error;
export const getMovieFetching = (state) => state.movie.fetching;
export const getMovieMostRecentViewed = (state) => state.movie.mostRecentViewed;

export const getMovieById = createSelector(
  [getMovieData, getMovieMostRecentViewed],
  ((data, id) => data.find((x) => x.id === Number(id))),
);
