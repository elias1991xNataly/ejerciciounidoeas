import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Title4 from './Title4';

describe('Title4', () => {
  let props;
  let shallowTitle4;
  let renderedTitle4;
  let mountedTitle4;

  const shallowTestComponent = () => {
    if (!shallowTitle4) {
      shallowTitle4 = shallow(<Title4 {...props} />);
    }
    return shallowTitle4;
  };

  const renderTestComponent = () => {
    if (!renderedTitle4) {
      renderedTitle4 = render(<Title4 {...props} />);
    }
    return renderedTitle4;
  };

  const mountTestComponent = () => {
    if (!mountedTitle4) {
      mountedTitle4 = mount(<Title4 {...props} />);
    }
    return mountedTitle4;
  };  

  beforeEach(() => {
    props = {};
    shallowTitle4 = undefined;
    renderedTitle4 = undefined;
    mountedTitle4 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
