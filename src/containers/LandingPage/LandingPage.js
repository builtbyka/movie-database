/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as moviesAll from './selectors';

import { API_MOVIES, API_GENRES } from '../../utils/paths';

import * as actions from './State/actions';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import MovieGenreList from '../../components/Movie/MovieGenreList';
import MovieList from '../../components/Movie/MovieList';

function LandingPage(props) {
  const {
    data, dataFetching, dataSuccess, dataSecondarySuccess,
    dataError, genres,
  } = props;

  // future -> move randomFeature to store so a 'featured' movie appears throughout the app
  const randomFeature = data[Math.floor(Math.random() * data.length)];
  const randomFeatureObj = randomFeature ? {
    featured: randomFeature, home: true,
  } : {};

  useEffect(() => {
    if (data.length < 1) {
      // future -> create higher order component to deal with required data.
      // If entry point in to app is from a single movie page, genres and all movies still loaded in, but KISS for now no cross communication so no issue
      const fetchMovies = async () => {
        try {
          dataFetching(true);
          const [apiData, apiGenre] = await Promise.all([
            axios.get(API_MOVIES),
            axios.get(API_GENRES),
          ]);
          dataSuccess(apiData.data.results);
          dataSecondarySuccess(apiGenre.data.genres);
          dataFetching(false);
        } catch (e) {
          dataError();
          dataFetching(false);
        }
      };
      fetchMovies();
    }
  }, [data, dataFetching, dataSuccess, dataSecondarySuccess,
    dataError]);


  if (!data.isFetching) {
    return (
      <div>
        <HeaderBanner feature={randomFeatureObj} />
        <article>
          {genres.filter((genre) => (genre.movies.length > 3)).map((genre) => (
            <MovieGenreList genre={genre} key={genre.id}>
              <MovieList movies={genre.movies} />
            </MovieGenreList>
          ))}
        </article>
      </div>
    );
  }
}

LandingPage.defaultProps = {
  data: [],
};

LandingPage.propTypes = {
  data: PropTypes.instanceOf(Array),
  dataFetching: PropTypes.func.isRequired,
  dataSuccess: PropTypes.func.isRequired,
  dataError: PropTypes.func.isRequired,
  dataSecondarySuccess: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: moviesAll.getMoviesAllData(state),
  error: moviesAll.getMoviesAllError(state),
  fetching: moviesAll.getMoviesAllFetching(state),
  genres: moviesAll.getMoviesAllByGenres(state),
});

const mapDispatchToProps = {
  dataFetching: actions.dataFetching,
  dataSuccess: actions.dataSuccess,
  dataSecondarySuccess: actions.dataSecondarySuccess,
  dataError: actions.dataError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
