import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Enunciate1 from './Enunciate1';

describe('Enunciate1', () => {
  let props;
  let shallowEnunciate1;
  let renderedEnunciate1;
  let mountedEnunciate1;

  const shallowTestComponent = () => {
    if (!shallowEnunciate1) {
      shallowEnunciate1 = shallow(<Enunciate1 {...props} />);
    }
    return shallowEnunciate1;
  };

  const renderTestComponent = () => {
    if (!renderedEnunciate1) {
      renderedEnunciate1 = render(<Enunciate1 {...props} />);
    }
    return renderedEnunciate1;
  };

  const mountTestComponent = () => {
    if (!mountedEnunciate1) {
      mountedEnunciate1 = mount(<Enunciate1 {...props} />);
    }
    return mountedEnunciate1;
  };  

  beforeEach(() => {
    props = {};
    shallowEnunciate1 = undefined;
    renderedEnunciate1 = undefined;
    mountedEnunciate1 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
