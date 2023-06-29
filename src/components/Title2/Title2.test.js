import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Title2 from './Title2';

describe('Title2', () => {
  let props;
  let shallowTitle2;
  let renderedTitle2;
  let mountedTitle2;

  const shallowTestComponent = () => {
    if (!shallowTitle2) {
      shallowTitle2 = shallow(<Title2 {...props} />);
    }
    return shallowTitle2;
  };

  const renderTestComponent = () => {
    if (!renderedTitle2) {
      renderedTitle2 = render(<Title2 {...props} />);
    }
    return renderedTitle2;
  };

  const mountTestComponent = () => {
    if (!mountedTitle2) {
      mountedTitle2 = mount(<Title2 {...props} />);
    }
    return mountedTitle2;
  };  

  beforeEach(() => {
    props = {};
    shallowTitle2 = undefined;
    renderedTitle2 = undefined;
    mountedTitle2 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
