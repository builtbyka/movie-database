import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from '../MovieDetail';

import MovieSummary from '../MovieSummary';
import MovieDescription from '../MovieDescription';

describe('<MovieDetail />', () => {
  it('renders without crashing', () => {
    const container = shallow(<MovieDetail />);
    expect(container).toBeDefined();
  });

  it('renders a summary', () => {
    const container = shallow(<MovieDetail />);
    expect(container.find(MovieSummary)).toHaveLength(1);
  });

  it('renders an overview', () => {
    const container = shallow(<MovieDetail />);
    expect(container.find(MovieDescription)).toHaveLength(1);
  });
});
