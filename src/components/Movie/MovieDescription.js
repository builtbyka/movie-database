import React from 'react';
import PropTypes from 'prop-types';

function MovieDescription({ overview, runtime }) {
  return (
    <div>
      <p style={{ marginTop: 0 }}>{overview}</p>
      <p>
        {`Runtime: ${runtime} minutes`}
      </p>
    </div>
  );
}

MovieDescription.defaultProps = {
  overview: '',
  runtime: 0,
};

MovieDescription.propTypes = {
  overview: PropTypes.string,
  runtime: PropTypes.number,
};

export default MovieDescription;
