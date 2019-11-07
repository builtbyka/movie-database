import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieFeatured from '../MovieFeatured';

describe('<MovieFeatured />', () => {
  const getProps = () => ({
    featured: {
      id: 384018,
      title: 'Fast & Furious Presents: Hobbs & Shaw',
    },
    home: false,
  });

  it('renders without crashing', () => {
    const container = shallow(<MovieFeatured />);
    expect(container).toBeDefined();
  });

  it('returns null if no feature', () => {
    const container = shallow(<MovieFeatured />);
    expect(container.type()).toEqual(null);
  });

  it('has a feature prop', () => {
    const prop = getProps();
    const container = mount(<MovieFeatured />);
    container.setProps({ feature: prop });
    expect('feature' in container.props()).toEqual(true);
  });
});
