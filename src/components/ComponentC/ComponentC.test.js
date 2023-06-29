import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ComponentC from './ComponentC';

describe('ComponentC', () => {
  let props;
  let shallowComponentC;
  let renderedComponentC;
  let mountedComponentC;

  const shallowTestComponent = () => {
    if (!shallowComponentC) {
      shallowComponentC = shallow(<ComponentC {...props} />);
    }
    return shallowComponentC;
  };

  const renderTestComponent = () => {
    if (!renderedComponentC) {
      renderedComponentC = render(<ComponentC {...props} />);
    }
    return renderedComponentC;
  };

  const mountTestComponent = () => {
    if (!mountedComponentC) {
      mountedComponentC = mount(<ComponentC {...props} />);
    }
    return mountedComponentC;
  };  

  beforeEach(() => {
    props = {};
    shallowComponentC = undefined;
    renderedComponentC = undefined;
    mountedComponentC = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
