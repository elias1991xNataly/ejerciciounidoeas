import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Title1 from './Title1';

describe('Title1', () => {
  let props;
  let shallowTitle1;
  let renderedTitle1;
  let mountedTitle1;

  const shallowTestComponent = () => {
    if (!shallowTitle1) {
      shallowTitle1 = shallow(<Title1 {...props} />);
    }
    return shallowTitle1;
  };

  const renderTestComponent = () => {
    if (!renderedTitle1) {
      renderedTitle1 = render(<Title1 {...props} />);
    }
    return renderedTitle1;
  };

  const mountTestComponent = () => {
    if (!mountedTitle1) {
      mountedTitle1 = mount(<Title1 {...props} />);
    }
    return mountedTitle1;
  };  

  beforeEach(() => {
    props = {};
    shallowTitle1 = undefined;
    renderedTitle1 = undefined;
    mountedTitle1 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
