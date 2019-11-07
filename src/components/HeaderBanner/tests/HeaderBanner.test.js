import React from 'react';
import { shallow } from 'enzyme';
import HeaderBanner from '../HeaderBanner';

describe('<HeaderBanner />', () => {
  it('renders without crashing', () => {
    const container = shallow(<HeaderBanner />);
    expect(container).toBeDefined();
  });

  it('renders a header', () => {
    const container = shallow(<HeaderBanner />);
    expect(container.find('header')).toHaveLength(1);
  });
});
