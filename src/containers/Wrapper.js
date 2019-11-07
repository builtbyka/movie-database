import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

function Wrapper(props) {
  const { children } = props;
  return (
    <main style={{ maxWidth: 1024, margin: 'auto' }}>
      <CssBaseline />
      {children}
    </main>
  );
}

Wrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Wrapper;
