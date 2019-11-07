import React from 'react';
import { shallow } from 'enzyme';
import HeaderBannerTitle from '../HeaderBannerTitle';

describe('<HeaderBannerTitle />', () => {
  it('renders without crashing', () => {
    const container = shallow(<HeaderBannerTitle />);
    expect(container).toBeDefined();
  });

  it('renders an h1', () => {
    const container = shallow(<HeaderBannerTitle />);
    expect(container.find('h1')).toHaveLength(1);
  });

  it('renders text in h1', () => {
    const container = shallow(<HeaderBannerTitle />);
    expect(
      container.find('h1').text(),
    ).toEqual('Movies DB');
  });

  it('renders an h2', () => {
    const container = shallow(<HeaderBannerTitle />);
    expect(container.find('h2')).toHaveLength(1);
  });

  it('renders text in h2', () => {
    const container = shallow(<HeaderBannerTitle />);
    expect(
      container.find('h2').text(),
    ).toEqual('Yet Another Movie Database');
  });
});
