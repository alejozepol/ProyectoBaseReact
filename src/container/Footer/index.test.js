import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('<Footer/>', () => {

  test('Render del componente header', () => {
    const footer = shallow(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
