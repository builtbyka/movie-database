import React from 'react';
import { shallow } from 'enzyme';
import MovieDescription from '../MovieDescription';

describe('<MovieDescription />', () => {
  const props = {
    overview: 'Lorem ipsum',
    runtime: 100,
  };

  it('renders without crashing', () => {
    const container = shallow(<MovieDescription />);
    expect(container).toBeDefined();
  });

  it('renders an overview', () => {
    const container = shallow(<MovieDescription />);
    container.setProps(props);
    expect(
      container.find('p').first().text(),
    ).toEqual('Lorem ipsum');
  });

  it('renders an overview', () => {
    const container = shallow(<MovieDescription />);
    container.setProps(props);
    expect(
      container.find('p').last().text(),
    ).toEqual('Runtime: 100 minutes');
  });
});
