import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import { navigate } from 'hookrouter';

import { IMG_PATH } from '../../utils/paths';

import useStyles from './style';


function MovieList(props) {
  // Future - Load currently quite clunky - add preload fade in while images fill space
  const classes = useStyles();
  const { movies, width } = props;
  const cols = (['lg', 'md'].includes(width) ? 4 : 3);
  return (
    <div className={classes.listRoot}>
      <GridList className={classes.listGridList} cols={cols} spacing={5} cellHeight={250}>
        {movies.map((movie) => (
          <GridListTile className={classes.listTile} key={movie.id} onClick={() => navigate(`/view/${movie.id}`)}>
            <img className={classes.listImg} src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              subtitle={(
                <p className={classes.listRating}>
                  <span>&#9733; </span>
                  {movie.vote_average}
                </p>
)}
              classes={{
                root: classes.listTitleBar,
                titleWrap: classes.listTitleWrap,
                title: classes.listTitle,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MovieList.defaultProps = {
  movies: {},
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Object),
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(MovieList);
