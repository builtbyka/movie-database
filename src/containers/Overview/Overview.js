import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as movieSelectors from './selectors';

import { API_MOVIE } from '../../utils/paths';

import * as actions from './State/actions';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import MovieDetail from '../../components/Movie/MovieDetail';


function Overview(props) {
  const {
    data, id, dataFetching, dataSuccess, dataError, saveId, movie,
  } = props;
  useEffect(() => {
    saveId(id);
    if (!movie) {
      const fetchMovie = async () => {
        try {
          dataFetching(true);
          const api = await axios.get(API_MOVIE(id));
          dataSuccess(api.data);
          dataFetching(false);
        } catch (e) {
          dataError();
          dataFetching(false);
        }
      };
      fetchMovie();
    }
  }, [data, id, movie, dataFetching, dataSuccess, dataError, saveId]);

  if (!data.isFetching && movie) {
    return (
      <div>
        <HeaderBanner feature={movie ? {
          featured: movie, home: false,
        } : {}}
        />
        <MovieDetail movie={movie} />
      </div>
    );
  }

  return <div />;
}

Overview.defaultProps = {
  id: '',
  data: {},
  movie: undefined,
};

Overview.propTypes = {
  id: PropTypes.string,
  data: PropTypes.instanceOf(Object),
  movie: PropTypes.instanceOf(Object),
  dataFetching: PropTypes.func.isRequired,
  dataSuccess: PropTypes.func.isRequired,
  dataError: PropTypes.func.isRequired,
  saveId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: movieSelectors.getMovieData(state),
  error: movieSelectors.getMovieError(state),
  fetching: movieSelectors.getMovieFetching(state),
  movie: movieSelectors.getMovieById(state),
});

const mapDispatchToProps = {
  dataFetching: actions.dataFetching,
  dataSuccess: actions.dataSuccess,
  dataError: actions.dataError,
  saveId: actions.saveId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
