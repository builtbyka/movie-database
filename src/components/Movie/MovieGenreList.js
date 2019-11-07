import React from 'react';
import PropTypes from 'prop-types';

function MovieGenreList(props) {
  const { children, genre } = props;
  return (
    <section style={{ padding: '0 10px' }} key={genre.id}>
      <h1>{genre.name}</h1>
      {children}
    </section>
  );
}

MovieGenreList.defaultProps = {
  genre: {},
  children: {},
};

MovieGenreList.propTypes = {
  genre: PropTypes.instanceOf(Object),
  children: PropTypes.instanceOf(Object),
};

export default MovieGenreList;
