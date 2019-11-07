import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';

import { IMG_PATH } from '../../utils/paths';

import useStyles from './style';

function MovieFeatured({ feature }) {
  const classes = useStyles();

  if (feature.featured) {
    const backgroundImage = (feature.featured.poster_path ? `url(${IMG_PATH}${feature.featured.poster_path})` : '');
    const header = (feature.home

      ? (
        <header className={classes.featuredHeader}>
          <h1 className={classes.featuredTitle}>{feature.featured.title}</h1>
          <h2 className={classes.featuredSubtitle}>Watch Now</h2>
        </header>
      )
      : '');
    return (
      <A href={`/view/${feature.featured.id}`}>
        <div className={classes.featuredImg} style={{ backgroundImage }}>
          {header}
        </div>
      </A>
    );
  } return null;
}

MovieFeatured.defaultProps = {
  feature: {},
};

MovieFeatured.propTypes = {
  feature: PropTypes.instanceOf(Object),
};


export default MovieFeatured;
