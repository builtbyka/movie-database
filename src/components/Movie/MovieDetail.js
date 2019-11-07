import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import MovieSummary from './MovieSummary';
import MovieDescription from './MovieDescription';
import { IMG_PATH } from '../../utils/paths';

import useStyles from './style';

function MovieDetail(props) {
  const {
    movie,
  } = props;
  const image = (movie.poster_path.length > 1 ? `${IMG_PATH}${movie.poster_path}` : '');
  const classes = useStyles();
  return (
    <header className={classes.detailRoot}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MovieSummary
            key={movie.id}
            rating={movie.vote_average}
            title={movie.title}
            tagline={movie.tagline}
            img={image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <MovieDescription overview={movie.overview} runtime={movie.runtime} />
        </Grid>
      </Grid>
    </header>
  );
}

MovieDetail.defaultProps = {
  movie: { poster_path: '' },
};

MovieDetail.propTypes = {
  movie: PropTypes.instanceOf(Object),
};

export default MovieDetail;
