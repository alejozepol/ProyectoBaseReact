import React from 'react';
import { shallow } from 'enzyme';
import Layout from '.';

describe('<Layout />', () => {

  test('Render del componente header', () => {
    const layout = shallow(<Layout />);
    expect(layout.length).toEqual(1);
  });
});
