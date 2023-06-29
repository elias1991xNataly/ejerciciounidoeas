import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ComponentB from './ComponentB';

describe('ComponentB', () => {
  let props;
  let shallowComponentB;
  let renderedComponentB;
  let mountedComponentB;

  const shallowTestComponent = () => {
    if (!shallowComponentB) {
      shallowComponentB = shallow(<ComponentB {...props} />);
    }
    return shallowComponentB;
  };

  const renderTestComponent = () => {
    if (!renderedComponentB) {
      renderedComponentB = render(<ComponentB {...props} />);
    }
    return renderedComponentB;
  };

  const mountTestComponent = () => {
    if (!mountedComponentB) {
      mountedComponentB = mount(<ComponentB {...props} />);
    }
    return mountedComponentB;
  };  

  beforeEach(() => {
    props = {};
    shallowComponentB = undefined;
    renderedComponentB = undefined;
    mountedComponentB = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
