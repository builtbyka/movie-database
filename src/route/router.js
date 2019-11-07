/* eslint-disable react/prop-types */
import React from 'react';

import LandingPage from '../containers/LandingPage/LandingPage';
import Overview from '../containers/Overview/Overview';

const routes = {
  '/': () => <LandingPage />,
  '/view/:id': ({ id }) => <Overview id={id} />,
};

export default routes;
