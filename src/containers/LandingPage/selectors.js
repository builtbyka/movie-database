/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

// movies - all
export const getMoviesAllData = (state) => state.moviesAll.data;
export const getMoviesAllError = (state) => state.moviesAll.error;
export const getMoviesAllFetching = (state) => state.moviesAll.fetching;
export const getMoviesAllGenres = (state) => state.moviesAll.genres;

export const getMoviesAllByGenres = createSelector(
  [getMoviesAllData, getMoviesAllGenres],
  ((data, genres) => genres.map((genre) => Object.assign(genre,
    { movies: data.filter((dat) => dat.genre_ids.includes(genre.id)) }))),
);
