import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

function MovieSummary(props) {
  const classes = useStyles();
  const {
    img, rating, title, tagline,
  } = props;
  const tg = tagline || '';

  return (
    <div>
      <img className={classes.summaryImg} src={img} alt={title} />
      <h1 className={classes.summaryTitle}>{title}</h1>
      <h2 className={classes.summarySubtitle}>{tg}</h2>
      <p style={{ color: '#ffb400' }}>
        <Rating
          name="simple-controlled"
          value={rating / 2}
          precision={0.1}
          readOnly
          size="small"
        />
        {rating / 2}

      </p>
    </div>
  );
}

MovieSummary.defaultProps = {
  img: '',
  rating: 0,
  title: '',
  tagline: '',
};

MovieSummary.propTypes = {
  rating: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default MovieSummary;
