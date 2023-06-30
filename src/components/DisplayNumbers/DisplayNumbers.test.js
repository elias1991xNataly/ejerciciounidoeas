import React from 'react';
import { shallow, render, mount } from 'enzyme';
import DisplayNumbers from './DisplayNumbers';

describe('DisplayNumbers', () => {
  let props;
  let shallowDisplayNumbers;
  let renderedDisplayNumbers;
  let mountedDisplayNumbers;

  const shallowTestComponent = () => {
    if (!shallowDisplayNumbers) {
      shallowDisplayNumbers = shallow(<DisplayNumbers {...props} />);
    }
    return shallowDisplayNumbers;
  };

  const renderTestComponent = () => {
    if (!renderedDisplayNumbers) {
      renderedDisplayNumbers = render(<DisplayNumbers {...props} />);
    }
    return renderedDisplayNumbers;
  };

  const mountTestComponent = () => {
    if (!mountedDisplayNumbers) {
      mountedDisplayNumbers = mount(<DisplayNumbers {...props} />);
    }
    return mountedDisplayNumbers;
  };  

  beforeEach(() => {
    props = {};
    shallowDisplayNumbers = undefined;
    renderedDisplayNumbers = undefined;
    mountedDisplayNumbers = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
