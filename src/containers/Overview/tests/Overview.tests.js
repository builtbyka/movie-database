import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../Overview';

describe('<Overview />', () => {
  it('renders without crashing', () => {
    const container = shallow(<Overview />);
    expect(container).toBeDefined();
  });
});
