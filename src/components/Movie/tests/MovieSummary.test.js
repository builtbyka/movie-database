import React from 'react';
import { shallow } from 'enzyme';
import MovieSummary from '../MovieSummary';

describe('<MovieSummary />', () => {
  it('renders without crashing', () => {
    const container = shallow(<MovieSummary />);
    expect(container).toBeDefined();
  });
});
