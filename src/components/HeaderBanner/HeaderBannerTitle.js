import React from 'react';
import { A } from 'hookrouter';

import useStyles from './style';

function HeaderBannerTitle() {
  const classes = useStyles();

  return (
    <A href="/">
      <div className={classes.titles}>
        <h1 className={classes.title}>Movies DB</h1>
        <h2 className={classes.tagline}>Yet Another Movie Database</h2>
      </div>
    </A>
  );
}

export default HeaderBannerTitle;
