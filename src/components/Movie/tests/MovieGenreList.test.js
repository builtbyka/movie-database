import React from 'react';
import { shallow } from 'enzyme';
import MovieGenreList from '../MovieGenreList';

describe('<MovieGenreList />', () => {
  it('renders without crashing', () => {
    const container = shallow(<MovieGenreList />);
    expect(container).toBeDefined();
  });

  it('renders a section', () => {
    const container = shallow(<MovieGenreList />);
    expect(container.find('section')).toHaveLength(1);
  });

  it('renders a header with a given name', () => {
    const genre = {
      name: 'test',
      id: 1,
    };

    const container = shallow(<MovieGenreList genre={genre} />);
    expect(
      container.find('h1').text(),
    ).toEqual('test');
  });

  it('renders children when passed in', () => {
    const container = shallow((
      <MovieGenreList>
        <div className="unique" />
      </MovieGenreList>
    ));
    expect(container.contains(<div className="unique" />)).toEqual(true);
  });
});
