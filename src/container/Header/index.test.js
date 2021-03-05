import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('<Header/>', () => {

  test('Render del componente header', () => {
    const header = shallow(<Header />);
    expect(header.length).toEqual(1);
  });
});
