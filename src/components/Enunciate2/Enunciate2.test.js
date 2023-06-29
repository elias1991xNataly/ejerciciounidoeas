import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Enunciate2 from './Enunciate2';

describe('Enunciate2', () => {
  let props;
  let shallowEnunciate2;
  let renderedEnunciate2;
  let mountedEnunciate2;

  const shallowTestComponent = () => {
    if (!shallowEnunciate2) {
      shallowEnunciate2 = shallow(<Enunciate2 {...props} />);
    }
    return shallowEnunciate2;
  };

  const renderTestComponent = () => {
    if (!renderedEnunciate2) {
      renderedEnunciate2 = render(<Enunciate2 {...props} />);
    }
    return renderedEnunciate2;
  };

  const mountTestComponent = () => {
    if (!mountedEnunciate2) {
      mountedEnunciate2 = mount(<Enunciate2 {...props} />);
    }
    return mountedEnunciate2;
  };  

  beforeEach(() => {
    props = {};
    shallowEnunciate2 = undefined;
    renderedEnunciate2 = undefined;
    mountedEnunciate2 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
