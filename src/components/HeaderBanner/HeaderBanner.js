import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import MovieFeatured from '../Movie/MovieFeatured';
import HeaderBannerTitle from './HeaderBannerTitle';

import useStyles from './style';


function MainTitleBanner(props) {
  const { feature } = props;

  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <HeaderBannerTitle home={feature.home} />
        </Grid>
        <Grid item xs={7}>
          <MovieFeatured feature={feature} />
        </Grid>
      </Grid>
    </header>
  );
}

MainTitleBanner.defaultProps = {
  feature: {},
};

MainTitleBanner.propTypes = {
  feature: PropTypes.instanceOf(Object),
};

export default MainTitleBanner;
