/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from '../src/client/components/List';

configure({ adapter: new Adapter() });

describe('testing FormContainer Rendering', () => {
  it('should render a List Component!', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.exists()).toBe(true);
  });
});
