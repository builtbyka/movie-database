import React from 'react';
import { shallow } from 'enzyme';
import MovieList from '../MovieList';

describe('<MovieList />', () => {
  it('renders without crashing', () => {
    const container = shallow(<MovieList />);
    expect(container).toBeDefined();
  });
});
