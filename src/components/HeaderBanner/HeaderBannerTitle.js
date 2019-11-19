import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';

import useStyles from './style';

function HeaderBannerTitle({ home }) {
  const classes = useStyles();

  return (
    <A href="/">
      <div className={classes.titles}>
        <h1 className={`${classes.title} ${!home ? classes.back : ''}`}>
          Movies DB
        </h1>
        <h2 className={classes.tagline}>Yet Another Movie Database</h2>
      </div>
    </A>
  );
}

HeaderBannerTitle.defaultProps = {
  home: true,
};

HeaderBannerTitle.propTypes = {
  home: PropTypes.bool,
};

export default HeaderBannerTitle;
