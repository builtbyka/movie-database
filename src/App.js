import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './route/router';

// containers
import Wrapper from './containers/Wrapper';
import PageError from './containers/Error/PageError';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Wrapper>{routeResult || <PageError />}</Wrapper>
  );
}

export default App;
