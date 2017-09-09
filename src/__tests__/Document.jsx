import React from 'react';
import { mount } from 'enzyme';

import Document from '../Document';

/* eslint-disable comma-dangle */

describe('Document', () => {
  it('renders default no data message when given no file', () => {
    const component = mount(
      <Document />
    );

    expect(component.state().pdf).toBe(null);

    const message = component.find('.ReactPDF__NoData');

    expect(message).toHaveLength(1);
    expect(message.text()).toBe('No PDF file specified.');
  });
});
