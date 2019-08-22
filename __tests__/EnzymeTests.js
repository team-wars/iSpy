/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from '../src/client/components/List';
import Tile from '../src/client/components/Tile';

configure({ adapter: new Adapter() });

describe('testing individual components', () => {
  it('should render a List Component!', () => {
    const props = {
      list: ['ro', 'roc', 'rock'],
      color: 'blue',
      listType: 'team',
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect();
  });

  it('should render a Tile component properly!', () => {
    const props = {
      testClick: jest.fn(),
      word: 'rock',
      affiliation: 'blue',
      selectTile: jest.fn(),
    };
    const wrapper = shallow(<Tile {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toBe('rock');
    expect(wrapper.find('button').hasClass('unselected-tile-button')).toBe(true);
    expect(wrapper.name()).toBe('article');
  });
});
