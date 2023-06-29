import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ComponentA from './ComponentA';

describe('ComponentA', () => {
  let props;
  let shallowComponentA;
  let renderedComponentA;
  let mountedComponentA;

  const shallowTestComponent = () => {
    if (!shallowComponentA) {
      shallowComponentA = shallow(<ComponentA {...props} />);
    }
    return shallowComponentA;
  };

  const renderTestComponent = () => {
    if (!renderedComponentA) {
      renderedComponentA = render(<ComponentA {...props} />);
    }
    return renderedComponentA;
  };

  const mountTestComponent = () => {
    if (!mountedComponentA) {
      mountedComponentA = mount(<ComponentA {...props} />);
    }
    return mountedComponentA;
  };  

  beforeEach(() => {
    props = {};
    shallowComponentA = undefined;
    renderedComponentA = undefined;
    mountedComponentA = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
